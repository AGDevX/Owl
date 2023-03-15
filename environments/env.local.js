module.exports = {
	ENVIRONMENT: {
		app: 'local',
		node: 'development'
	},
	HOST: {
		name: 'owl-local.agdevx.com',
		baseHref: '/'
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
			name: 'RS.local',
			version: 1.0,
			storeName: 'RS.local',
			description: 'Client-side storage'
		}
	}
};
