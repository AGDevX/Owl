import { AppHttpResponse } from 'apis/AppHttpResponse';
import { handleHttpResponse, handleNetworkError } from 'apis/http-response-handlers';

import { Album } from './Album';

// @ts-ignore
const baseUrl = env.APIS.jsonPlaceholder.baseUrl;

export const getAlbums = (id: number | null = null): Promise<AppHttpResponse<Array<Album>>> => {
	let url = `${baseUrl}/albums/${id ?? ''}`;
	return fetch(url, {
		method: 'GET'
	})
		.then(handleHttpResponse<Array<Album>>)
		.catch(handleNetworkError);
};
