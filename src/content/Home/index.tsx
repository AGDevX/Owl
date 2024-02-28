import { useState } from 'react';

import { useAuthService } from 'auth/useAuthService';

import { Album } from 'apis/json-placeholder-api/Album';

import { useAlbumService } from 'services/useAlbumService';
import { useAppConfig } from 'services/useAppConfig';

import './styles.css';

export const Home = (): React.ReactNode => {
	const { isAuthenticated, isAuthenticating, user } = useAuthService();
	const appConfig = useAppConfig();

	const [albums, setAlbums] = useState<Array<Album> | undefined>(undefined);

	const { getAlbums, deleteAlbum } = useAlbumService();

	const handleGetAlbums = async (id: number | null) => {
		setAlbums(await getAlbums(id));
	};

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
						handleGetAlbums(1);
					}}
				>
					Get album 1
				</button>
				<button
					onClick={() => {
						deleteAlbum(1);
					}}
				>
					Delete album
				</button>
				<button
					onClick={() => {
						handleGetAlbums(32);
					}}
				>
					Get album 32
				</button>
				<button
					onClick={() => {
						if (albums) {
							deleteAlbum(32);
						}
					}}
				>
					Delete album 32
				</button>
				<pre>{JSON.stringify(albums, null, 2)}</pre>
			</div>
		</>
	);
};
