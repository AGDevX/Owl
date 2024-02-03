import { Counter } from 'content/Counter';

import { AppRouteType } from './AppRouteType';
import { IAppRoute } from './IAppRoute';

export const counterRoutes: ReadonlyArray<IAppRoute> = [
	{
		id: 'counter',
		name: 'Counter',
		enabled: true,
		private: false,
		type: AppRouteType.Content,
		path: '/counter',
		element: <Counter />,
		children: []
	}
];
