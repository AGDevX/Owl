import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useRouting from '../../../../routing/useRouting';
import { useClientStorage, StorageKey } from '../../../../libs/clientStorage/useClientStorage';
import useAuthN from '../../useAuthN';

const PrivateRoute = () => {
	const routing = useRouting();
	const { set } = useClientStorage();
	const { isAuthenticated, isAuthenticating, signIn } = useAuthN();

	const [loading, setLoading] = useState(true);

	set(StorageKey.AuthNReturnRoute, routing.getCurrentRoute());

	useEffect(() => {
		if (!isAuthenticated && !isAuthenticating) {
			signIn();
		} else if (isAuthenticated && !isAuthenticating) {
			setLoading(false);
		}
	}, [isAuthenticated, isAuthenticating]);

	return loading ? <>LOADING</> : <Outlet />;
};

export default PrivateRoute;
