import RouteType from './routeType';
import NotFound from '../structure/NotFound';

export default [
	{
		id: 'not-found',
		name: 'Not Found',
		enabled: true,
		private: false,
		type: RouteType.NotFound,
		path: '*',
		element: <NotFound />,
		children: []
	}
];
