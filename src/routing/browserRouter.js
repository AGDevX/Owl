import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from './routes';
import PrivateRoute from '../auth/authN/components/PrivateRoute';
import PublicRoute from '../auth/authN/components/PublicRoute';
import App from '../App';

const renderRoutes = (routes) => {
	return routes.map((route) =>
		route.children && route.children.length ? (
			<Route key={route.id} path={route.path} element={route.element}>
				{renderRoutes(route.children)}
			</Route>
		) : (
			<Route key={route.id} path={route.path} element={route.element} />
		)
	);
};

export default createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route element={<PublicRoute />}>{renderRoutes(publicRoutes)}</Route>
			<Route element={<PrivateRoute />}>{renderRoutes(privateRoutes)}</Route>
		</Route>
	)
);
