import { IEnvironment } from './IConfig';

export const env: IEnvironment = {
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
		description: 'React starter / educational / inspirational application',
		enableServiceWorker: true,
		autoSignIn: true
	},
	AUTH: {
		provider: 'auth0',
		oidcScopes: ['openid', 'profile', 'email', 'offline_access'],
		auth0: {
			domain: 'agdevx.auth0.com',
			clientId: 'xIWLicq70VulQHYmihep3KYRO8pTAISC',
			signInRedirectUrl: 'https://owl-local.agdevx.com/auth-callback?auth-type=sign-in',
			signOutRedirectUrl: 'https://owl-local.agdevx.com/auth-callback?auth-type=sign-out' //-- Must be set in Auth0
		}
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
	APP_INITIAL_STATE: {
		counter: 12
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
