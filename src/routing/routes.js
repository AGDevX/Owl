import homeRoutes from './routes.home';
import fooBarRoutes from './routes.fooBar';
import counterRoutes from './routes.counter';
import structureRoutes from './routes.structure';

const routes = [...homeRoutes, ...counterRoutes, ...fooBarRoutes, ...structureRoutes];

export default routes;
