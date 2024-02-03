import { useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { IAppRoute } from '../../../routing/IAppRoute';
import { AuthType } from '../../AuthType';
import { useAuthService } from '../../useAuthService';

export const AuthCallback = (): React.ReactNode => {
	const [returnRoute, setReturnRoute] = useState<IAppRoute | undefined>(undefined);
	const [search] = useSearchParams();
	const { getAuthReturnRoute } = useAuthService();

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
