import { IAppRoute } from 'routing/IAppRoute';
import { useRoutingService } from 'routing/useRoutingService';

import { StorageKey, useClientStorage } from 'libs/clientStorage/useClientStorage';

import { IAuth } from './IAuth';
import { useAuthProvider } from './useAuthProvider';

export const useAuthService = (): IAuthNService => {
	const authProvider = useAuthProvider();
	const { AppRouteType, getCurrentRoute, getRouteOfType } = useRoutingService();
	const { get, set } = useClientStorage();

	const validAuthReturnRouteTypes = [AppRouteType.Content, AppRouteType.Home];

	const getAuthReturnRoute = async (signOut: boolean = false): Promise<IAppRoute> => {
		const savedRoute = await get<IAppRoute>(StorageKey.AuthNReturnRoute);

		const route = savedRoute ?? getRouteOfType(AppRouteType.Home)!;

		if (signOut) {
			return route.private ? getRouteOfType(AppRouteType.Home)! : route;
		}

		return route;
	};

	const setAuthReturnRoute = async (): Promise<void> => {
		const currentRoute = getCurrentRoute();
		const currentAuthReturnRoute = await getAuthReturnRoute();

		if (validAuthReturnRouteTypes.some((rt) => rt === currentRoute.type)) {
			set(StorageKey.AuthNReturnRoute, currentRoute);
		} else if (!currentAuthReturnRoute) {
			set(StorageKey.AuthNReturnRoute, getRouteOfType(AppRouteType.Home));
		}
	};

	return {
		...authProvider,
		getAuthReturnRoute,
		setAuthReturnRoute
	};
};

interface IAuthNService extends IAuth {
	// eslint-disable-next-line no-unused-vars
	getAuthReturnRoute: (signOut?: boolean) => Promise<IAppRoute>;
	setAuthReturnRoute: () => Promise<void>;
}
