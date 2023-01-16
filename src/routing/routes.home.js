import Home from '../pages/home';

const homeRoutes = [
	{
		path: '/',
		element: <Home />,
		children: [],
		private: true
	},
	{
		path: '/home',
		element: <Home />,
		children: [],
		private: false
	}
];

export default homeRoutes;
