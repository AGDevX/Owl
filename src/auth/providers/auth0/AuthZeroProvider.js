import PropTypes from 'prop-types';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthZeroProvider = ({ oidcScopes, auth0Config, children }) => {
	const { domain, clientId, signInRedirectUrl } = auth0Config;

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

AuthZeroProvider.propTypes = {
	oidcScopes: PropTypes.array.isRequired,
	auth0Config: PropTypes.object.isRequired,
	children: PropTypes.element.isRequired
};

export default AuthZeroProvider;
