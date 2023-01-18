import { useEffect } from 'react';
import { useAppConfig } from '../../services/useAppConfig';
import { useAlbumService } from '../../services/useAlbumService';

import './styles.css';

const Home = () => {
	const appConfig = useAppConfig();
	const albumService = useAlbumService();

	useEffect(() => {
		albumService.getAlbums();
	}, []);

	return (
		<>
			<div className='silver'>
				<pre>{JSON.stringify(appConfig, null, 2)}</pre>
			</div>

			<div className='darkgray'>
				<button
					onClick={() => {
						albumService.removeAlbum(albumService.albums[0]?.id);
					}}
				>
					Remove first album
				</button>
				<pre>{JSON.stringify(albumService.albums, null, 2)}</pre>
			</div>
		</>
	);
};

export default Home;
