const env = {
	ENVIRONMENT: {
		app: 'local',
		node: 'development'
	},
	HOST: {
		provider: 'localhost',
		name: 'owl-local.agdevx.com',
		port: 443,
		https: true,
		baseHref: '/' //-- Should be / if the application is hosted at the root of the (sub)domain
	},
	APP: {
		name: 'Owl (local)',
		description: 'React starter application',
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
			baseUrl: 'https://localhost:7264',
			audience: 'api://agdevx/spider-web-api/dev',
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
			clientId: 'xIWLicq70VulQHYmihep3KYRO8pTAISC',
			signInRedirectUrl: 'https://owl-local.agdevx.com/auth-callback?auth-type=sign-in',
			signOutRedirectUrl: 'https://owl-local.agdevx.com/auth-callback?auth-type=sign-out' //-- Must be set in Auth0 site
		}
	},
	CLIENT_STORAGE: {
		provider: 'localForage',
		localForage: {
			driver: 'asyncStorage', //-- localforage.INDEXEDDB
			name: 'Owl.local',
			version: 1.0,
			storeName: 'Owl.local',
			description: 'Client-side storage'
		}
	}
};

export default env;
