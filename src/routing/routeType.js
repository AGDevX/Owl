const RouteType = Object.freeze({
	PrivateRoute: Symbol('private-route'),
	PublicRoute: Symbol('public-route'),
	SignIn: Symbol('sign-in'),
	SignOut: Symbol('sign-out'),
	AuthCallback: Symbol('auth-callback'),
	ConsentRequired: Symbol('consent-required'),
	Content: Symbol('content'),
	Home: Symbol('home'),
	NotFound: Symbol('not-found')
});

export default RouteType;
