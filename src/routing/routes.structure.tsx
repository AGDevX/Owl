import { Error } from '../structure/Error';
import { NotFound } from '../structure/NotFound';

import { AppRouteType } from './AppRouteType';
import { IAppRoute } from './IAppRoute';

export const structureRoutes: ReadonlyArray<IAppRoute> = [
	{
		id: 'error',
		name: 'Error',
		enabled: true,
		private: false,
		type: AppRouteType.Error,
		path: '/error',
		element: <Error />,
		children: []
	},
	{
		id: 'not-found',
		name: 'Not Found',
		enabled: true,
		private: false,
		type: AppRouteType.NotFound,
		path: '*',
		element: <NotFound />,
		children: []
	}
];
