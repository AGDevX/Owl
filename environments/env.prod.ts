import { IEnvironment } from './IConfig';

const env: IEnvironment = {
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
		enableServiceWorker: true,
		autoSignIn: true
	},
	AUTH: {
		provider: 'auth0',
		oidcScopes: ['openid', 'profile', 'email', 'offline_access'],
		auth0: {
			domain: 'agdevx.auth0.com',
			clientId: 'KQFrJTkURY80tqWodMJAAiu9mgoKOMe8',
			signInRedirectUrl: 'https://owl.agdevx.com/auth-callback?auth-type=sign-in',
			signOutRedirectUrl: 'https://owl.agdevx.com/auth-callback?auth-type=sign-out' //-- Must be set in Auth0
		}
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
	APP_INITIAL_STATE: {
		counter: 12
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
