import { handleHttpResponse, handleHttpError } from './http-response-handlers';
import { accessTokenRetriever } from '../auth/providers/auth0/accessTokenRetriever';

const baseUrl = env.APIS.spider.baseUrl;
const audience = env.APIS.spider.audience;
let scope = 'api:access';

export const getUserInfo = async (email) => {
	const accessToken = await accessTokenRetriever.getAccessToken(audience, scope);
	let url = `${baseUrl}/v1/User/getUserInfo?email=${email}`;
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
