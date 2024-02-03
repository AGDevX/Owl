import { useAuth0 } from '@auth0/auth0-react';

import { IAuthProviderConfig } from '../../../../environments/IConfig';
import { useRoutingService } from '../../../routing/useRoutingService';
import { IAuth } from '../../IAuth';
import { IOidcUser } from '../../IOidcUser';
import { accessTokenRetriever } from '../../accessTokenRetriever';

export const useAuthZeroService = ({ oidcScopes, auth0 }: useAuthZeroServiceProps): IAuth => {
	const { user, isAuthenticated, isLoading, loginWithRedirect, logout, getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
	const { navigateToConsentRequiredRoute } = useRoutingService();

	const getAccessToken = async (audience: string, scopes: ReadonlyArray<string>): Promise<string | void> => {
		const authorizationParams = {
			audience,
			scope: oidcScopes.concat(scopes).join(' ')
		};

		let consentRequired = false;
		let consentDeclined = false;

		let accessTokenResponse;

		accessTokenResponse = await getAccessTokenSilently({ authorizationParams }).catch(async (err) => {
			consentRequired = true;
			console.error(err);
		});

		if (consentRequired) {
			accessTokenResponse = await getAccessTokenWithPopup({ authorizationParams }).catch(async (err) => {
				consentDeclined = true;
				console.error(err);
			});
		}

		if (consentDeclined) {
			navigateToConsentRequiredRoute(scopes);
		}

		return accessTokenResponse;
	};

	//-- Make getAccessToken available outside of a React component
	accessTokenRetriever.getAccessToken = getAccessToken;

	return {
		user: user as IOidcUser,
		isAuthenticated,
		isAuthenticating: isLoading,
		signIn: () => loginWithRedirect(),
		signOut: () =>
			logout({
				logoutParams: {
					returnTo: auth0.signOutRedirectUrl
				}
			})
	};
};

interface useAuthZeroServiceProps {
	oidcScopes: Array<string>;
	auth0: IAuthProviderConfig;
}
