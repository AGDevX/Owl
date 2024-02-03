import { Home } from '../content/Home';

import { AppRouteType } from './AppRouteType';
import { IAppRoute } from './IAppRoute';

export const homeRoutes: ReadonlyArray<IAppRoute> = [
	{
		id: 'home-1',
		name: 'Home',
		enabled: true,
		private: false,
		type: AppRouteType.Home,
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
		type: AppRouteType.Home,
		path: '/home',
		element: <Home />,
		children: []
	}
];
