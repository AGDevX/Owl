import PrivateRoute from '../auth/PrivateRoute';
import PublicRoute from '../auth/PublicRoute';
import App from '../App';

import homeRoutes from './routes.home';

const allRoutes = [...homeRoutes];

const publicRoute = {
	element: <PublicRoute />,
	children: [...allRoutes.filter((r) => !r.private)]
};

const privateRoute = {
	element: <PrivateRoute />,
	children: [...allRoutes.filter((r) => r.private)]
};

const appRoute = {
	element: <App />,
	children: [publicRoute, privateRoute]
};

const routes = [appRoute];

export default routes;
