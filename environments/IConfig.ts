export interface IEnvironment {
	ENVIRONMENT: IEnvironmentConfig;
	HOST: IHostConfig;
	APP: IAppConfig;
	AUTH: IAuthConfig;
	APIS: {
		spider: IApiConfig;
		jsonPlaceholder: IApiConfig;
	};
	APP_INITIAL_STATE: IAppInitialStateConfig;
	CLIENT_STORAGE: IClientStorageConfig;
}

interface IEnvironmentConfig {
	app: string;
	node: string;
}

interface IHostConfig {
	provider: string;
	name: string;
	port: number;
	https: boolean;
	baseHref: string;
}

interface IAppConfig {
	name: string;
	description: string;
	showReactRouterDomErrorPage: boolean;
	enableServiceWorker: boolean;
	autoSignIn: boolean;
}

interface IApiConfig {
	baseUrl: string;
	audience?: string;
	scopes?: ReadonlyArray<string>;
}

interface IAppInitialStateConfig {
	counter: number;
	albums: ReadonlyArray<string>;
}

interface IAuthConfig {
	provider: string;
	oidcScopes: ReadonlyArray<string>;
	auth0: IOAuth2Config;
}

interface IOAuth2Config {
	domain: string;
	clientId: string;
	signInRedirectUrl: string;
	signOutRedirectUrl: string;
}

interface IClientStorageConfig {
	provider: string;
	localForage: ILocalForageConfig;
}

export interface ILocalForageConfig {
	driver: string;
	name: string;
	version: number;
	storeName: string;
	description: string;
}
