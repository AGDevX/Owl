import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

const useAuthZero = ({ signOutRedirectUrl }) => {
	const { user, isAuthenticated, isLoading, loginWithRedirect, logOut } = useAuth0();

	return {
		account: user,
		isAuthenticated,
		isAuthenticating: isLoading,
		signIn: () => loginWithRedirect(),
		signOut: () => logOut({ returnTo: signOutRedirectUrl })
	};
};

useAuthZero.propTypes = {
	config: PropTypes.object.isRequired
};

export default useAuthZero;
