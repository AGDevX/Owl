import RouteType from './routeType';
import SignIn from '../auth/authN/components/SignIn';
import SignOut from '../auth/authN/components/SignOut';
import AuthCallback from '../auth/authN/components/AuthCallback';

export default [
	{
		id: 'sign-in',
		name: 'Sign In',
		enabled: true,
		private: false,
		type: RouteType.SignIn,
		path: '/sign-in',
		element: <SignIn />,
		children: []
	},
	{
		id: 'log-in',
		name: 'Log In',
		enabled: true,
		private: false,
		type: RouteType.SignIn,
		path: '/log-in',
		element: <SignIn />,
		children: []
	},
	{
		id: 'sign-out',
		name: 'Sign Out',
		enabled: true,
		private: false,
		type: RouteType.SignOut,
		path: '/sign-out',
		element: <SignOut />,
		children: []
	},
	{
		id: 'log-out',
		name: 'Log Out',
		enabled: true,
		private: false,
		type: RouteType.SignOut,
		path: '/log-out',
		element: <SignOut />,
		children: []
	},
	{
		id: 'auth-callback',
		name: 'Auth Callback',
		enabled: true,
		private: false, //-- setting this to true will result in sign-in redirect loops
		type: RouteType.AuthCallback,
		path: '/auth-callback',
		element: <AuthCallback />,
		children: []
	}
];
