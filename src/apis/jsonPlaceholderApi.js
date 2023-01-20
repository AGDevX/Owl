const baseUrl = env.APIS.jsonPlaceholder.baseUrl;

export const getAlbums = (id = null) => {
	let url = `${baseUrl}/albums/${id ?? ''}`;
	return fetch(url, {
		method: 'GET'
	}).then((response) => response.json());
};
