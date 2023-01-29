import { Outlet } from 'react-router-dom';

import useAuthNService from '../../useAuthNService';

const PublicRoute = () => {
	const { setAuthReturnRoute } = useAuthNService();
	setAuthReturnRoute();

	return <Outlet />;
};

export default PublicRoute;
