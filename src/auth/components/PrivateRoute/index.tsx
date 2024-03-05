import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuthService } from 'auth/useAuthService';

export const PrivateRoute = (): React.ReactNode => {
	const { isAuthenticated, isAuthenticating, signIn, setAuthReturnRoute } = useAuthService();

	const [loading, setLoading] = useState(true);

	setAuthReturnRoute();

	useEffect(() => {
		if (!isAuthenticated && !isAuthenticating) {
			signIn();
		} else if (isAuthenticated && !isAuthenticating) {
			setLoading(false);
		}
	}, [isAuthenticated, isAuthenticating]);

	return loading ? <>LOADER</> : <Outlet />;
};
