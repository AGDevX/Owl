import authRoutes from './routes.auth';
import homeRoutes from './routes.home';
import fooBarRoutes from './routes.fooBar';
import counterRoutes from './routes.counter';
import structureRoutes from './routes.structure';

const routes = [...authRoutes, ...homeRoutes, ...counterRoutes, ...fooBarRoutes, ...structureRoutes];

export default routes;
