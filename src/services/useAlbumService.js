import { useDispatch, useSelector } from 'react-redux';
import { useJsonPlaceholderApi } from '../apis/useJsonPlaceholderApi';
import { add, remove } from '../state/redux/slices/albumSlice';

export const useAlbumService = () => {
	const dispatch = useDispatch();
	const albums = useSelector((state) => state.albums.value);
	const jsonPlaceholderApi = useJsonPlaceholderApi();

	const getAlbums = async (id = null) => {
		const albums = await jsonPlaceholderApi.getAlbums(id);
		dispatch(add(albums));
	};

	const removeAlbum = (id) => {
		if (id && albums && albums.length > 0) {
			dispatch(remove(id));
		}
	};

	return {
		albums,
		getAlbums,
		removeAlbum
	};
};
