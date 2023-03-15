import { useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import useAuthNService from '../../useAuthNService';
import AuthType from '../../authType';

const AuthCallback = () => {
	const [returnRoute, setReturnRoute] = useState(null);
	const [search] = useSearchParams();
	const { getAuthReturnRoute } = useAuthNService();

	const getAuthNReturnRoute = async () => {
		const authTypeQueryParam = search.get('auth-type');
		const isSignOut = authTypeQueryParam === AuthType.SignOut ?? false;
		const route = await getAuthReturnRoute(isSignOut);
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
