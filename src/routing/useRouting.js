import { matchRoutes, useLocation } from 'react-router-dom';
import { allRoutes } from './routes';
import RouteType from './routeType';

const useRouting = () => {
	const getCurrentRoute = () => {
		const location = useLocation();
		const { route } = matchRoutes(allRoutes, location).find((m) => m.pathname === location.pathname);
		return route;
	};

	const getHomeRoute = () => {
		const route = allRoutes.find((r) => r.type === RouteType.Home);
		return route;
	};

	return {
		getCurrentRoute,
		getHomeRoute
	};
};

export default useRouting;
