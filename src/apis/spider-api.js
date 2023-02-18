import { handleHttpResponse, handleHttpError } from './http-response-handlers';
import { accessTokenRetriever } from '../auth/authN/providers/auth0/accessToken';

const baseUrl = env.APIS.spider.baseUrl;
const audience = env.APIS.spider.audience;
let scope = 'api:access';

export const getUserInfo = async () => {
	const accessToken = await accessTokenRetriever.getAccessToken(audience, scope);
	let url = `${baseUrl}/v1/user/getuserinfo`;
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	})
		.then(handleHttpResponse)
		.catch(handleHttpError);
};
