import { User } from '../content/User';

import { AppRouteType } from './AppRouteType';
import { IAppRoute } from './IAppRoute';

export const userRoutes: ReadonlyArray<IAppRoute> = [
	{
		id: 'User',
		name: 'User',
		enabled: true,
		private: true,
		type: AppRouteType.Content,
		path: '/user',
		element: <User />,
		children: []
	}
];
