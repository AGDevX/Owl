import PropTypes from 'prop-types';

import AuthZeroProvider from './providers/auth0/AuthZeroProvider';
import useAppConfig from '../../services/useAppConfig';

const AuthNProvider = ({ children }) => {
	const { provider } = useAppConfig().AUTH_N;

	const renderProvider = () => {
		if (provider === 'auth0') {
			const auth0Config = useAppConfig().AUTH_N.auth0;
			return <AuthZeroProvider config={auth0Config}>{children}</AuthZeroProvider>;
		} else {
			const auth0Config = useAppConfig().AUTH_N.auth0;
			return <AuthZeroProvider config={auth0Config}>{children}</AuthZeroProvider>;
		}
	};

	return <>{renderProvider()}</>;
};

AuthNProvider.propTypes = {
	children: PropTypes.element.isRequired
};

export default AuthNProvider;
