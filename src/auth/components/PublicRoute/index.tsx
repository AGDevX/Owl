import { Outlet } from 'react-router-dom';

import { useAuthService } from 'auth/useAuthService';

export const PublicRoute = (): React.ReactNode => {
	const { setAuthReturnRoute } = useAuthService();
	setAuthReturnRoute();

	return <Outlet />;
};
