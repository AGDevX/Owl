import { accessTokenRetriever } from 'auth/accessTokenRetriever';

import { AppHttpResponse } from 'apis/AppHttpResponse';
import { handleHttpResponse, handleNetworkError } from 'apis/http-response-handlers';

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

//-- https://stackoverflow.com/questions/71573317/how-to-invalidate-rtk-query-cachesreset-state-globally
// export const baseApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${BASE_URL}/api`,
//     prepareHeaders: (headers, { getState }) => {
//       const token = (getState() as RootState).auth.token;
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ["Vehicle", "CompanySetting", "Associate"],
//   endpoints: () => ({}),
// });
