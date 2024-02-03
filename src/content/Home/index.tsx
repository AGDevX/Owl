import { useEffect } from 'react';

import { useAuthService } from 'auth/useAuthService';

import { useAlbumService } from 'services/useAlbumService';
import { useAppConfig } from 'services/useAppConfig';

import './styles.css';

export const Home = (): React.ReactNode => {
	const { isAuthenticated, isAuthenticating, user } = useAuthService();
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
				<pre>user: {JSON.stringify(user, null, 2)}</pre>
			</div>
			<div className='silver'>
				<pre>{JSON.stringify(appConfig, null, 2)}</pre>
			</div>
			<div className='darkgray'>
				<button
					onClick={() => {
						removeAlbum(albums[Object.keys(albums)[0]].id);
					}}
				>
					Remove first album
				</button>
				<pre>{JSON.stringify(albums, null, 2)}</pre>
			</div>
		</>
	);
};
