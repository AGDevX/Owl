import RouteType from './routeType';
import Error from '../structure/Error';
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
	},
	{
		id: 'error',
		name: 'Error',
		enabled: true,
		private: false,
		type: RouteType.Error,
		path: '/error',
		element: <Error />,
		children: []
	}
];
