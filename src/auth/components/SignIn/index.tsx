import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { IAppRoute } from 'routing/IAppRoute';

import { useAuthService } from 'auth/useAuthService';

import { useAppConfig } from 'services/useAppConfig';

export const SignIn = (): React.ReactNode => {
	const [returnRoute, setReturnRoute] = useState<IAppRoute | undefined>(undefined);

	const appConfig = useAppConfig();
	const { isAuthenticated, isAuthenticating, signIn, getAuthReturnRoute } = useAuthService();

	const getAndSetReturnRoute = async () => {
		setReturnRoute(await getAuthReturnRoute());
	};

	useEffect(() => {
		if (!isAuthenticated && !isAuthenticating && appConfig.APP.autoSignIn) {
			signIn();
		} else if (isAuthenticated && !isAuthenticating) {
			getAndSetReturnRoute();
		}
	}, [isAuthenticated, isAuthenticating]);

	return returnRoute ? (
		<Navigate to={returnRoute.path} />
	) : (
		<>
			<span>LOADER</span>
		</>
	);
};
