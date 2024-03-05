import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';

import { AppRouteType } from './AppRouteType';
import { IAppRoute } from './IAppRoute';
import { allRoutes, getRouteOfType } from './routes';

export const useRoutingService = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const getCurrentRoute = (): IAppRoute => {
		const route = matchRoutes(allRoutes, location)?.find((m) => m.pathname === location.pathname);
		return route?.route ?? getRouteOfType(AppRouteType.NotFound);
	};

	const navigateToConsentRequiredRoute = (requiredScopes: ReadonlyArray<string>) => {
		const route = getRouteOfType(AppRouteType.ConsentRequired);
		navigate(route.path, { state: { requiredScopes } });
	};

	return {
		allRoutes,
		AppRouteType,
		getCurrentRoute,
		getRouteOfType,
		navigateToConsentRequiredRoute
	};
};
