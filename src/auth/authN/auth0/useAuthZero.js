import { useAuth0 } from '@auth0/auth0-react';

import useAppConfig from '../../../services/useAppConfig';

const useAuthZero = () => {
	const { signOutRedirectUrl } = useAppConfig().AUTH_N.auth0;

	const { user, isAuthenticated, isLoading, loginWithRedirect, logOut } = useAuth0();
	debugger;
	return {
		account: user,
		isAuthenticated,
		isAuthenticating: isLoading,
		signIn: () => loginWithRedirect(),
		signOut: () => logOut({ returnTo: signOutRedirectUrl })
	};
};

export default useAuthZero;
