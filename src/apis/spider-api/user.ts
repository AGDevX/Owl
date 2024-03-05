import { spiderApi } from '.';

import { accessTokenRetriever } from 'auth/accessTokenRetriever';

import { SpiderApiResponse } from './SpiderApiResponse';
import { UserInfo } from './UserInfo';

// @ts-ignore
const audience = env.APIS.spider.audience;

let scopes: Array<string> = ['api:access'];

export const userApi = spiderApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserInfo: builder.query<SpiderApiResponse<UserInfo>, string>({
			queryFn: async (arg, api, extraOptions, baseQuery) => {
				const accessToken = await accessTokenRetriever.getAccessToken(audience, scopes);
				const url = `v1/User/getUserInfo?email=${arg}`;
				const response = (await baseQuery({
					url,
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				})) as { data: SpiderApiResponse<UserInfo> } | { error: any };
				return response;
			},
			providesTags: (result) => (result ? [{ type: 'User', id: result.value.user.email }] : [{ type: 'User' }])
		})
	})
});

export const { useGetUserInfoQuery } = userApi;
