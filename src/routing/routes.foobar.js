import RouteType from './routeType';
import FooBar from '../content/FooBar';
import Foo from '../content/Foobar/Foo';
import Bar from '../content/Foobar/Bar';

export default [
	{
		id: 'foo-bar',
		name: 'FooBar',
		enabled: true,
		private: false,
		type: RouteType.Content,
		path: '/foobar',
		element: <FooBar />,
		children: [
			{
				id: 'foo',
				name: 'Foo',
				enabled: true,
				private: true,
				type: RouteType.Content,
				path: 'foo',
				element: <Foo />,
				children: [
					{
						id: 'bar',
						name: 'Bar',
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
