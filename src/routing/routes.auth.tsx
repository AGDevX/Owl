import { AuthCallback } from 'auth/components/AuthCallback';
import { ConsentRequired } from 'auth/components/ConsentRequired';
import { SignIn } from 'auth/components/SignIn';
import { SignOut } from 'auth/components/SignOut';

import { AppRouteType } from './AppRouteType';
import { IAppRoute } from './IAppRoute';

export const authRoutes: ReadonlyArray<IAppRoute> = [
	{
		id: 'sign-in',
		name: 'Sign In',
		enabled: true,
		private: false,
		type: AppRouteType.SignIn,
		path: '/sign-in',
		element: <SignIn />,
		children: []
	},
	{
		id: 'log-in',
		name: 'Log In',
		enabled: true,
		private: false,
		type: AppRouteType.SignIn,
		path: '/log-in',
		element: <SignIn />,
		children: []
	},
	{
		id: 'sign-out',
		name: 'Sign Out',
		enabled: true,
		private: false,
		type: AppRouteType.SignOut,
		path: '/sign-out',
		element: <SignOut />,
		children: []
	},
	{
		id: 'log-out',
		name: 'Log Out',
		enabled: true,
		private: false,
		type: AppRouteType.SignOut,
		path: '/log-out',
		element: <SignOut />,
		children: []
	},
	{
		id: 'auth-callback',
		name: 'Auth Callback',
		enabled: true,
		private: false, //-- setting this to true will result in sign-in redirect loops
		type: AppRouteType.AuthCallback,
		path: '/auth-callback',
		element: <AuthCallback />,
		children: []
	},
	{
		id: 'consent-required',
		name: 'Consent Required',
		enabled: true,
		private: true,
		type: AppRouteType.ConsentRequired,
		path: '/consent-required',
		element: <ConsentRequired />,
		children: []
	}
];
