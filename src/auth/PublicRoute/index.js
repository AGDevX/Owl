import { Outlet } from 'react-router-dom';

const PublicRoute = () => {
	console.log('public');
	return <Outlet />;
};

export default PublicRoute;
