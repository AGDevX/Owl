import RouteType from './routeType';
import AuthCallback from '../auth/authN/components/AuthCallback';

export default [
	{
		id: 'auth-callback',
		name: 'Auth Callback',
		enabled: true,
		private: false, //-- setting this to true will result in sign-in redirect loops
		type: RouteType.AuthCallback,
		path: 'auth-callback',
		element: <AuthCallback />,
		children: []
	}
];
