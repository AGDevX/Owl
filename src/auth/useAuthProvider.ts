import { useAppConfig } from 'services/useAppConfig';

import { IAuth } from './IAuth';
import { useAuthZeroService } from './providers/authZero/useAuthZeroService';

export const useAuthProvider = (): IAuth => {
	const authConfig = useAppConfig().AUTH;

	if (authConfig.provider === 'auth0') {
		return useAuthZeroService(authConfig);
	} else {
		return useAuthZeroService(authConfig);
	}
};
