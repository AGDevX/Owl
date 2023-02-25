import PropTypes from 'prop-types';

import AuthZeroProvider from '../providers/auth0/AuthZeroProvider';
import useAppConfig from '../../services/useAppConfig';

const AuthNProvider = ({ children }) => {
	const { provider, oidcScopes, auth0 } = useAppConfig().AUTH_N;

	const renderProvider = () => {
		if (provider === 'auth0') {
			return (
				<AuthZeroProvider oidcScopes={oidcScopes} auth0Config={auth0}>
					{children}
				</AuthZeroProvider>
			);
		} else {
			return (
				<AuthZeroProvider oidcScopes={oidcScopes} auth0Config={auth0}>
					{children}
				</AuthZeroProvider>
			);
		}
	};

	return <>{renderProvider()}</>;
};

AuthNProvider.propTypes = {
	children: PropTypes.element.isRequired
};

export default AuthNProvider;
