import { jsonPlaceholderApi } from '.';

import { Album } from './Album';

export const albumsApi = jsonPlaceholderApi.injectEndpoints({
	endpoints: (builder) => ({
		getAlbums: builder.query<Array<Album>, number | null>({
			query: (id = null) => `albums/${id ?? ''}`,
			transformResponse: (response: Array<Album>) => {
				if (Array.isArray(response)) {
					return response;
				} else {
					return [response];
				}
			},
			providesTags: (result) => (result ? result.map(({ id }) => ({ type: 'Album', id })) : [{ type: 'Album' }])
		}),
		deleteAlbum: builder.mutation<void, number>({
			query: (id) => ({
				url: `albums/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: (result, error, id) => (id ? [{ type: 'Album', id }] : [{ type: 'Album' }]) //-- https://stackoverflow.com/questions/70274339/rtk-query-invalidatestags-doesnt-seem-to-remove-cached-data-every-time
		})
	})
});

export const { useLazyGetAlbumsQuery, useDeleteAlbumMutation } = albumsApi;
