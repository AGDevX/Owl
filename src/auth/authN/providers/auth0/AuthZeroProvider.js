import PropTypes from 'prop-types';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthZeroProvider = ({ config, children }) => {
	const { domain, clientId, signInRedirectUrl } = config;

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: signInRedirectUrl
			}}
		>
			{children}
		</Auth0Provider>
	);
};

AuthZeroProvider.propTypes = {
	config: PropTypes.object.isRequired,
	children: PropTypes.element.isRequired
};

export default AuthZeroProvider;
