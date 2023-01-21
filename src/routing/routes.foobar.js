import RouteType from './routeType';
import FooBar from '../pages/FooBar';
import Foo from '../pages/Foobar/Foo';
import Bar from '../pages/Foobar/Bar';

const fooBarRoutes = [
	{
		id: 'foo-bar',
		enabled: true,
		private: true,
		type: RouteType.Content,
		path: 'foobar',
		element: <FooBar />,
		children: [
			{
				id: 'foo',
				enabled: true,
				private: false,
				type: RouteType.Content,
				path: 'foo',
				element: <Foo />,
				children: [
					{
						id: 'bar',
						enabled: true,
						private: false,
						type: RouteType.Content,
						path: 'bar',
						element: <Bar />,
						children: []
					}
				]
			}
		]
	}
];

export default fooBarRoutes;
