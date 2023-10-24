import authRoutes from './routes.auth';
import homeRoutes from './routes.home';
import userInfoRoutes from './routes.user';
import fooBarRoutes from './routes.fooBar';
import counterRoutes from './routes.counter';
import structureRoutes from './routes.structure';

export const allRoutes = [...authRoutes, ...homeRoutes, ...userInfoRoutes, ...counterRoutes, ...fooBarRoutes, ...structureRoutes];
export const publicRoutes = allRoutes.filter((r) => !r.private);
export const privateRoutes = allRoutes.filter((r) => r.private);

export const getRouteOfType = (routeType) => {
	const route = allRoutes.find((r) => r.type === routeType);
	return route;
};
