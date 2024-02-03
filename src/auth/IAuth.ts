import { IOidcUser } from './IOidcUser';

export interface IAuth {
	user: IOidcUser;
	isAuthenticated: boolean;
	isAuthenticating: boolean;
	signIn: () => void;
	signOut: () => void;
}
