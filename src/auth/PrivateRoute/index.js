import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useAuthN from '../authN/useAuthN';

const PrivateRoute = () => {
	const { isAuthenticated, isInProgress, signIn } = useAuthN();

	useEffect(() => {
		if (!isAuthenticated && !isInProgress) {
			signIn();
		}
	}, []);

	return <Outlet />;
};

export default PrivateRoute;
