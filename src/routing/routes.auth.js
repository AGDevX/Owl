import { RouteType } from './routeType';
import AuthCallback from '../auth/AuthCallback';

const authRoutes = [
	{
		id: 'auth-callback',
		enabled: true,
		path: 'auth-callback',
		element: <AuthCallback />,
		children: [],
		private: false, //-- setting this to true will result in sign-in redirect loops
		type: RouteType.AuthCallback
	}
];

export default authRoutes;
