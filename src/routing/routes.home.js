import { RouteType } from './routeType';
import Home from '../pages/Home';

const homeRoutes = [
	{
		id: 'home-1',
		enabled: true,
		private: true,
		type: RouteType.Home,
		path: '/',
		element: <Home />,
		children: []
	},
	{
		id: 'home-2',
		enabled: true,
		private: false,
		type: RouteType.Home,
		path: '/home',
		element: <Home />,
		children: []
	}
];

export default homeRoutes;
