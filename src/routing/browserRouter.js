import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { allRoutes } from './routes';
import PrivateRoute from '../auth/authN/components/PrivateRoute';
import PublicRoute from '../auth/authN/components/PublicRoute';
import App from '../App';

//-- Public parent route / Private child route
//--	No authentication required to visit the parent route
//--	Authentication required to visit the child route

//-- Private parent route / Public child route
//--	Authentication required to visit the parent route
//--	Authentication required to visit the child route

const renderRoutes = (routes) => {
	return routes.map((route) =>
		route.children && route.children.length ? (
			<Route key={route.id} element={route.private ? <PrivateRoute /> : <PublicRoute />}>
				<Route path={route.path} element={route.element}>
					{renderRoutes(route.children)}
				</Route>
			</Route>
		) : (
			<Route key={route.id} element={route.private ? <PrivateRoute /> : <PublicRoute />}>
				<Route path={route.path} element={route.element} />
			</Route>
		)
	);
};

export default createBrowserRouter(
	createRoutesFromElements(<Route element={<App />}>{renderRoutes(allRoutes)}</Route>)
);
