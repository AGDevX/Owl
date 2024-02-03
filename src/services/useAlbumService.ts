import { useEffect } from 'react';

import { get, remove, useAlbumSelector } from '../state/redux/albumSlice';
import { useAppDispatch } from '../state/redux/store';

export const useAlbumService = () => {
	const dispatch = useAppDispatch();
	const albums = useAlbumSelector((state) => state.albums.value);

	useEffect(() => {
		// console.log(albums);
	}, [albums]);

	const getAlbums = async (id: number | null = null) => {
		await dispatch(get(id));
	};

	const removeAlbum = (id: number) => {
		dispatch(remove(id));
	};

	return {
		albums,
		getAlbums,
		removeAlbum
	};
};
