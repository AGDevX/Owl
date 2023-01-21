import PropTypes from 'prop-types';

import AuthZeroProvider from './auth0/AuthZeroProvider';
import useAppConfig from '../../services/useAppConfig';

const AuthNProvider = ({ children }) => {
	const { provider } = useAppConfig().AUTH_N;

	const renderProvider = () => {
		if (provider === 'auth0') {
			return <AuthZeroProvider>{children}</AuthZeroProvider>;
		} else {
			return <AuthZeroProvider>{children}</AuthZeroProvider>;
		}
	};

	return <>{renderProvider()}</>;
};

AuthNProvider.propTypes = {
	children: PropTypes.element.isRequired
};

export default AuthNProvider;
