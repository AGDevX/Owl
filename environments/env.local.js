module.exports = {
	ENVIRONMENT: {
		app: 'local',
		node: 'development'
	},
	HOST: {
		publicPath: '/'
	},
	APP: {
		name: 'React Seed (local)',
		abbr: 'RS'
	},
	APP_INITIAL_STATE: {
		counter: 12,
		albums: []
	},
	APIS: {
		jsonPlaceholder: {
			baseUrl: 'https://jsonplaceholder.typicode.com'
		}
	},
	AUTH_N: {
		provider: 'auth0',
		auth0: {
			domain: 'agdevx.auth0.com',
			clientId: 'xIWLicq70VulQHYmihep3KYRO8pTAISC',
			signInRedirectUrl: 'http://localhost:8080/auth-callback',
			signOutRedirectUrl: 'http://localhost:8080'
		}
	},
	CLIENT_STORAGE: {
		provider: 'localForage',
		localForage: {
			driver: 'IndexedDB',
			name: `${this.APP.abbr}.${this.ENVIRONMENT.local}`,
			version: 1.0,
			storeName: `${this.APP.abbr}.${this.ENVIRONMENT.local}`,
			description: 'Client-side storage'
		}
	}
};
