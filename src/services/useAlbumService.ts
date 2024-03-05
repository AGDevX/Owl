import { useDeleteAlbumMutation, useLazyGetAlbumsQuery } from 'apis/json-placeholder-api/albums';

export const useAlbumService = () => {
	const [callGetAlbums, { data }] = useLazyGetAlbumsQuery();
	const [callDeleteAlbum] = useDeleteAlbumMutation();

	const getAlbums = async (id: number | null = null) => {
		const albums = await callGetAlbums(id);
		return albums.data;
	};

	const deleteAlbum = (id: number) => {
		callDeleteAlbum(id);
	};

	return {
		data,
		getAlbums,
		deleteAlbum
	};
};
