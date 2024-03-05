import { LoaderFunction } from 'react-router-dom';

import { AppRouteType } from './AppRouteType';

export interface IAppRoute {
	id: string;
	name: string;
	enabled: boolean;
	private: boolean;
	type: AppRouteType;
	path: string;
	element: React.ReactNode;
	errorElement?: React.ReactNode;
	loader?: LoaderFunction;
	children: IAppRoute[];
}
