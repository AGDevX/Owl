import RouteType from './routeType';
import Counter from '../pages/Counter';

const counterRoutes = [
	{
		id: 'counter',
		enabled: true,
		private: true,
		type: RouteType.Content,
		path: '/counter',
		element: <Counter />,
		children: []
	}
];

export default counterRoutes;
