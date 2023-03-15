import RouteType from './routeType';
import Home from '../content/Home';

export default [
	{
		id: 'home-1',
		name: 'Home',
		enabled: true,
		private: false,
		type: RouteType.Home,
		path: '/',
		element: <Home />,
		children: [],
		loader: () => {
			console.log('loader called');
			return null;
		}
	},
	{
		id: 'home-2',
		name: 'Home',
		enabled: true,
		private: true,
		type: RouteType.Home,
		path: '/home',
		element: <Home />,
		children: []
	}
];
