const env = {
	ENVIRONMENT: {
		app: 'prod',
		node: 'production'
	},
	HOST: {
		provider: 'server',
		name: 'owl.agdevx.com',
		port: 443,
		https: true,
		baseHref: '/' //-- Should be / if the application is hosted at the root of the (sub)domain
	},
	APP: {
		name: 'Owl',
		description: 'React starter / educational / inspirational application',
		showReactRouterDomErrorPage: true,
		enableServiceWorker: true,
		autoSignIn: true
	},
	APP_INITIAL_STATE: {
		counter: 12,
		albums: []
	},
	APIS: {
		spider: {
			baseUrl: 'https://spider.agdevx.com',
			audience: 'api://agdevx/spider-web-api/prod',
			scopes: ['api:access']
		},
		jsonPlaceholder: {
			baseUrl: 'https://jsonplaceholder.typicode.com'
		}
	},
	AUTH: {
		provider: 'auth0',
		oidcScopes: ['openid', 'profile', 'email', 'offline_access'],
		auth0: {
			domain: 'agdevx.auth0.com',
			clientId: 'KQFrJTkURY80tqWodMJAAiu9mgoKOMe8',
			signInRedirectUrl: 'https://owl.agdevx.com/auth-callback?auth-type=sign-in',
			signOutRedirectUrl: 'https://owl.agdevx.com/auth-callback?auth-type=sign-out' //-- Must be set in Auth0 site
		}
	},
	CLIENT_STORAGE: {
		provider: 'localForage',
		localForage: {
			driver: 'asyncStorage', //-- localforage.INDEXEDDB
			name: 'Owl',
			version: 1.0,
			storeName: 'Owl',
			description: 'Client-side storage'
		}
	}
};

export default env;
