import { FooBar } from 'content/FooBar';
import { Bar } from 'content/FooBar/Bar';
import { Foo } from 'content/FooBar/Foo';

import { AppRouteType } from './AppRouteType';
import { IAppRoute } from './IAppRoute';

export const fooBarRoutes: ReadonlyArray<IAppRoute> = [
	{
		id: 'foo-bar',
		name: 'FooBar',
		enabled: true,
		private: false,
		type: AppRouteType.Content,
		path: '/foobar',
		element: <FooBar />,
		children: [
			{
				id: 'foo',
				name: 'Foo',
				enabled: true,
				private: true,
				type: AppRouteType.Content,
				path: 'foo',
				element: <Foo />,
				children: [
					{
						id: 'bar',
						name: 'Bar',
						enabled: true,
						private: false,
						type: AppRouteType.Content,
						path: 'bar',
						element: <Bar />,
						children: []
					}
				]
			}
		]
	}
];
