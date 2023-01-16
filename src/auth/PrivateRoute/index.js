import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
	console.log('private');
	return <Outlet />;
};

export default PrivateRoute;
