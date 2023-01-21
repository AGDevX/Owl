import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useClientStorage, StorageKey } from '../../../../libs/clientStorage/useClientStorage';

const AuthCallback = () => {
	const [returnRoute, setReturnRoute] = useState(null);

	const { get } = useClientStorage();

	const getAuthNReturnRoute = async () => {
		const route = await get(StorageKey.AuthNReturnRoute);
		setReturnRoute(route);
	};

	getAuthNReturnRoute();

	return returnRoute ? (
		<Navigate to={returnRoute.path} />
	) : (
		<>
			<span>LOADER</span>
		</>
	);
};

export default AuthCallback;
