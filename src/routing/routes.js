import structureRoutes from './routes.structure';
import homeRoutes from './routes.home';
import fooBarRoutes from './routes.fooBar';
import counterRoutes from './routes.counter';

const routes = [...structureRoutes, ...homeRoutes, ...counterRoutes, ...fooBarRoutes];

export default routes;
