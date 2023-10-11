import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { allRoutes } from './routes';
import PrivateRoute from '../auth/authN/components/PrivateRoute';
import PublicRoute from '../auth/authN/components/PublicRoute';
import App from '../App';
import Error from '../structure/Error';

const showReactRouterDomErrorPage = env.APP.showReactRouterDomErrorPage;

//-- Public parent route / Private child route
//--	No authentication required to visit the parent route
//--	Authentication required to visit the child route

//-- Private parent route / Public child route
//--	Authentication required to visit the parent route
//--	Authentication required to visit the child route

const getErrorElement = (route) => {
	if (showReactRouterDomErrorPage) {
		return null;
	}

	const errorElement = route.errorElement;
	return errorElement ? errorElement : null;
};

const getLoader = (route) => {
	const loader = route.loader;
	return loader ? loader : null;
};

const renderRoutes = (routes) => {
	return routes.map((route) =>
		route.children && route.children.length ? (
			<Route key={route.id} element={route.private ? <PrivateRoute /> : <PublicRoute />}>
				<Route
					path={route.path}
					element={route.element}
					errorElement={getErrorElement(route)}
					loader={getLoader(route)}
				>
					{renderRoutes(route.children)}
				</Route>
			</Route>
		) : (
			<Route key={route.id} element={route.private ? <PrivateRoute /> : <PublicRoute />}>
				<Route
					path={route.path}
					element={route.element}
					errorElement={getErrorElement(route)}
					loader={getLoader(route)}
				/>
			</Route>
		)
	);
};

export default createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />} errorElement={showReactRouterDomErrorPage ? undefined : <Error />}>
			{renderRoutes(allRoutes)}
		</Route>
	)
);
