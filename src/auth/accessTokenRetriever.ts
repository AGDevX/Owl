/* eslint-disable no-unused-vars */

interface IAccessTokenRetriever {
	getAccessToken: (audience: string, scopes: ReadonlyArray<string>) => Promise<string | void>;
}

export const accessTokenRetriever: IAccessTokenRetriever = {
	getAccessToken: (audience: string, scopes: ReadonlyArray<string>): Promise<string | void> => {
		throw new Error('Function not implemented.');
	}
};
