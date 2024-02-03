import { Outlet } from 'react-router-dom';

import { useAuthService } from '../../useAuthService';

export const PublicRoute = (): React.ReactNode => {
	const { setAuthReturnRoute } = useAuthService();
	setAuthReturnRoute();

	return <Outlet />;
};
