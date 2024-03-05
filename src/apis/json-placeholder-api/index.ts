import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// @ts-ignore
const baseUrl = env.APIS.jsonPlaceholder.baseUrl;

export const jsonPlaceholderApi = createApi({
	reducerPath: 'jsonPlaceholderApi',
	tagTypes: ['Album'],
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: () => ({})
});
