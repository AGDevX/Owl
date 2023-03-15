import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useAuthN from '../../useAuthN';
import useAuthNService from '../../useAuthNService';

const PrivateRoute = () => {
	const { setAuthReturnRoute } = useAuthNService();
	const { isAuthenticated, isAuthenticating, signIn } = useAuthN();

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

export default PrivateRoute;
