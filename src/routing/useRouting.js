import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import { allRoutes } from './routes';
import RouteType from './routeType';

const useRouting = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const getCurrentRoute = () => {
		const { route } = matchRoutes(allRoutes, location).find((m) => m.pathname === location.pathname);
		return route;
	};

	const getHomeRoute = () => {
		const route = allRoutes.find((r) => r.type === RouteType.Home);
		return route;
	};

	const navigateToConsentRequiredRoute = (requiredScopes) => {
		const route = allRoutes.find((r) => r.type === RouteType.ConsentRequired);
		navigate(route.path, { state: { requiredScopes } });
	};

	return {
		allRoutes,
		RouteType,
		getCurrentRoute,
		getHomeRoute,
		navigateToConsentRequiredRoute
	};
};

export default useRouting;
