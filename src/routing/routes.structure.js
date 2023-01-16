import { RouteType } from './routeType';
import NotFound from '../structure/NotFound';

const structureRoutes = [
	{
		id: 'not-found',
		enabled: true,
		path: '*',
		element: <NotFound />,
		children: [],
		private: false,
		type: RouteType.NotFound
	}
];

export default structureRoutes;
