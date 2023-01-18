import { useAppConfig } from '../services/useAppConfig';

export const useJsonPlaceholderApi = () => {
	const appConfig = useAppConfig();

	const baseUrl = appConfig.APIS.jsonPlaceholder.baseUrl;

	const getAlbums = (id = null) => {
		let url = `${baseUrl}/albums/${id ?? ''}`;
		return fetch(url, {
			method: 'GET'
		}).then((response) => response.json());
	};

	return { getAlbums };
};
