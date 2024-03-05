import { AppRouteType } from './AppRouteType';
import { IAppRoute } from './IAppRoute';
import { authRoutes } from './routes.auth';
import { counterRoutes } from './routes.counter';
import { fooBarRoutes } from './routes.fooBar';
import { homeRoutes } from './routes.home';
import { structureRoutes } from './routes.structure';
import { userRoutes } from './routes.user';

export const allRoutes = [...authRoutes, ...homeRoutes, ...userRoutes, ...counterRoutes, ...fooBarRoutes, ...structureRoutes];
export const publicRoutes = allRoutes.filter((r) => !r.private);
export const privateRoutes = allRoutes.filter((r) => r.private);

export const getRouteOfType = (appRouteType: AppRouteType): IAppRoute => {
	const route = allRoutes.find((r) => r.type === appRouteType);
	return route!; //-- Since we are retrieving routes by an enum, it's safe to assume the route will exist
};
