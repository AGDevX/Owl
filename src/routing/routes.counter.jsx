import RouteType from './routeType';
import Counter from '../content/Counter';

export default [
	{
		id: 'counter',
		name: 'Counter',
		enabled: true,
		private: false,
		type: RouteType.Content,
		path: '/counter',
		element: <Counter />,
		children: []
	}
];
