import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { App } from '../App';
import { PrivateRoute } from '../auth/components/PrivateRoute';
import { PublicRoute } from '../auth/components/PublicRoute';
import { Error } from '../structure/Error';

import { IAppRoute } from './IAppRoute';
import { allRoutes } from './routes';

//-- Public parent route / Private child route
//--	No authentication required to visit the parent route
//--	Authentication required to visit the child route

//-- Private parent route / Public child route
//--	Authentication required to visit the parent route
//--	Authentication required to visit the child route

const renderRoutes = (appRoutes: ReadonlyArray<IAppRoute>): ReadonlyArray<React.ReactNode> => {
	return appRoutes.map((appRoute: IAppRoute) =>
		appRoute.children && appRoute.children.length ? (
			<Route key={appRoute.id} element={appRoute.private ? <PrivateRoute /> : <PublicRoute />}>
				<Route path={appRoute.path} element={appRoute.element} errorElement={appRoute.errorElement ?? <Error />} loader={appRoute.loader}>
					{renderRoutes(appRoute.children)}
				</Route>
			</Route>
		) : (
			<Route key={appRoute.id} element={appRoute.private ? <PrivateRoute /> : <PublicRoute />}>
				<Route path={appRoute.path} element={appRoute.element} errorElement={appRoute.errorElement ?? <Error />} loader={appRoute.loader} />
			</Route>
		)
	);
};

export default createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />} errorElement={<Error />}>
			{renderRoutes(allRoutes)}
		</Route>
	)
);
