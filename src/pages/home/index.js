import { useEffect } from 'react';

import useAuthN from '../../auth/authN/useAuthN';
import useAppConfig from '../../services/useAppConfig';
import useAlbumService from '../../services/useAlbumService';

import './styles.css';

const Home = () => {
	const { isAuthenticated, isAuthenticating, account } = useAuthN();
	const appConfig = useAppConfig();
	const { albums, getAlbums, removeAlbum } = useAlbumService();

	useEffect(() => {
		getAlbums();
	}, []);

	return (
		<>
			<div className='darkgray'>
				<div>isAuthenticated: {JSON.stringify(isAuthenticated, null, 2)}</div>
				<div>isAuthenticating: {JSON.stringify(isAuthenticating, null, 2)}</div>
				<pre>account: {JSON.stringify(account, null, 2)}</pre>
				<pre>{JSON.stringify(albums, null, 2)}</pre>
			</div>

			<div className='silver'>
				<pre>{JSON.stringify(appConfig, null, 2)}</pre>
			</div>

			<div className='darkgray'>
				<button
					onClick={() => {
						removeAlbum(albums[0]?.id);
					}}
				>
					Remove first album
				</button>
				<pre>{JSON.stringify(albums, null, 2)}</pre>
			</div>
		</>
	);
};

export default Home;
