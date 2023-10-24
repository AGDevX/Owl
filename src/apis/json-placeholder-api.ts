const baseUrl = env.APIS.jsonPlaceholder.baseUrl;
import { handleHttpResponse, handleHttpError } from './http-response-handlers';

export const getAlbums = (id = null) => {
	let url = `${baseUrl}/albums/${id ?? ''}`;
	return fetch(url, {
		method: 'GET'
	})
		.then(handleHttpResponse)
		.catch(handleHttpError);
};
