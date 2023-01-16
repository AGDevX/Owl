import structureRoutes from './routes.structure';
import homeRoutes from './routes.home';
import fooBarRoutes from './routes.fooBar';

const routes = [...structureRoutes, ...homeRoutes, ...fooBarRoutes];

export default routes;
