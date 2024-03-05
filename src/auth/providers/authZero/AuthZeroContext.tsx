import { Auth0Provider } from '@auth0/auth0-react';

import { IAuthProviderConfig } from 'environments/IConfig';

export const AuthZeroContext = ({ oidcScopes, authProviderConfig, children }: AuthZeroContextProps) => {
	const { domain, clientId, signInRedirectUrl } = authProviderConfig;

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: signInRedirectUrl,
				scope: oidcScopes.join(' ')
			}}
		>
			{children}
		</Auth0Provider>
	);
};

interface AuthZeroContextProps {
	oidcScopes: Array<string>;
	authProviderConfig: IAuthProviderConfig;
	children: React.ReactNode;
}
