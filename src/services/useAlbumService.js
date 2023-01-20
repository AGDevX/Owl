import { useDispatch, useSelector } from 'react-redux';
import { get, remove } from '../state/redux/thunks/albumThunk';

export const useAlbumService = () => {
	const dispatch = useDispatch();
	const albums = useSelector((state) => state.albums.value);

	const getAlbums = async (id = null) => {
		await dispatch(get(id));
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
