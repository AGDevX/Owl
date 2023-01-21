import PropTypes from 'prop-types';
import { Auth0Provider } from '@auth0/auth0-react';

import useAppConfig from '../../../services/useAppConfig';

const AuthZeroProvider = ({ children }) => {
	const { domain, clientId, signInRedirectUrl } = useAppConfig().AUTH_N.auth0;

	debugger;
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
	children: PropTypes.element.isRequired
};

export default AuthZeroProvider;
