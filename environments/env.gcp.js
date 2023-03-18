module.exports = {
	ENVIRONMENT: {
		app: 'prod',
		node: 'production'
	},
	HOST: {
		name: 'owl-gcp.agdevx.com',
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
		counter: 7,
		albums: []
	},
	APIS: {
		spider: {
			baseUrl: 'https://spider-gcp.agdevx.com',
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
			signInRedirectUrl: 'https://owl-gcp.agdevx.com/auth-callback?auth-type=sign-in',
			signOutRedirectUrl: 'https://owl-gcp.agdevx.com/auth-callback?auth-type=sign-out' //-- Must be set in Auth0 site
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
