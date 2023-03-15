import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import useAppConfig from '../../../../services/useAppConfig';
import useAuthN from '../../useAuthN';
import useAuthNService from '../../useAuthNService';

const SignIn = () => {
	const [returnRoute, setReturnRoute] = useState(null);

	const appConfig = useAppConfig();
	const { getAuthReturnRoute } = useAuthNService();
	const { isAuthenticated, isAuthenticating, signIn } = useAuthN();

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

export default SignIn;
