import RouteType from './routeType';
import Counter from '../pages/Counter';

export default [
	{
		id: 'counter',
		name: 'Counter',
		enabled: true,
		private: true,
		type: RouteType.Content,
		path: 'counter',
		element: <Counter />,
		children: []
	}
];
