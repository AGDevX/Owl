import RouteType from './routeType';
import Home from '../pages/Home';

const homeRoutes = [
	{
		id: 'home-1',
		enabled: true,
		private: false,
		type: RouteType.Home,
		path: '/',
		element: <Home />,
		children: []
	},
	{
		id: 'home-2',
		enabled: true,
		private: true,
		type: RouteType.Home,
		path: '/home',
		element: <Home />,
		children: []
	}
];

export default homeRoutes;

// import { RouteType } from './routeType';
// import Home from '../pages/Home';
// import { useJsonPlaceholderApi } from '../apis/jsonPlaceholder';

// export const useHomeRoutes = () => {
// 	const jsonPlaceholderApi = useJsonPlaceholderApi();

// 	const homeRoutes = [
// 		{
// 			id: 'home-1',
// 			enabled: true,
// 			private: true,
// 			type: RouteType.Home,
// 			path: '/',
// 			element: <Home />,
// 			loader: async () => {
// 				return jsonPlaceholderApi.getAlbums();
// 			},
// 			children: []
// 		},
// 		{
// 			id: 'home-2',
// 			enabled: true,
// 			private: false,
// 			type: RouteType.Home,
// 			path: '/home',
// 			element: <Home />,
// 			loader: async () => {
// 				return jsonPlaceholderApi.getAlbums();
// 			},
// 			children: []
// 		}
// 	];

// 	return homeRoutes;
// };
