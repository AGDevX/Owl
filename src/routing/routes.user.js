import RouteType from './routeType';
import UserInfo from '../pages/UserInfo';

export default [
	{
		id: 'UserInfo',
		name: 'UserInfo',
		enabled: true,
		private: true,
		type: RouteType.Content,
		path: '/user-info',
		element: <UserInfo />,
		children: []
	}
];
