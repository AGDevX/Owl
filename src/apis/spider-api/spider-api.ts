import { accessTokenRetriever } from '../../auth/accessTokenRetriever';
import { AppHttpResponse } from '../AppHttpResponse';
import { handleHttpResponse, handleNetworkError } from '../http-response-handlers';

import { SpiderApiResponse } from './SpiderApiResponse';
import { UserInfo } from './UserInfo';

// @ts-ignore
const baseUrl = env.APIS.spider.baseUrl;
// @ts-ignore
const audience = env.APIS.spider.audience;

let scopes: Array<string> = ['api:access'];

export const getUserInfo = async (email: string): Promise<AppHttpResponse<SpiderApiResponse<UserInfo>>> => {
	const accessToken = await accessTokenRetriever.getAccessToken(audience, scopes);
	let url = `${baseUrl}/v1/User/getUserInfo?email=${email}`;
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	})
		.then(handleHttpResponse<SpiderApiResponse<UserInfo>>)
		.catch(handleNetworkError);
};
