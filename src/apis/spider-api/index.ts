import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// @ts-ignore
const baseUrl = env.APIS.spider.baseUrl;

export const spiderApi = createApi({
	reducerPath: 'spiderApi',
	tagTypes: ['User'],
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: () => ({})
});
