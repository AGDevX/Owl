import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

import useRouting from '../../../../routing/useRouting';
import { accessTokenRetriever } from './accessToken';

const useAuthZero = ({ oidcScopes, auth0 }) => {
	const { user, isAuthenticated, isLoading, loginWithRedirect, logout, getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
	const { navigateToConsentRequiredRoute } = useRouting();

	const getAccessToken = async (audience, scopes) => {
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
		account: user,
		isAuthenticated,
		isAuthenticating: isLoading,
		signIn: () => loginWithRedirect(),
		signOut: () => logout({ returnTo: auth0.signOutRedirectUrl })
	};
};

useAuthZero.propTypes = {
	config: PropTypes.object.isRequired
};

export default useAuthZero;
