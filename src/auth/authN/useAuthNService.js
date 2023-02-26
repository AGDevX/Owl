import useRouting from '../../routing/useRouting';
import { useClientStorage, StorageKey } from '../../libs/clientStorage/useClientStorage';

const useAuthNService = () => {
	const { RouteType, getCurrentRoute, getRouteOfType } = useRouting();
	const { get, set } = useClientStorage();

	const getAuthReturnRoute = async (signOut = false) => {
		const route = (await get(StorageKey.AuthNReturnRoute)) ?? getRouteOfType(RouteType.Home);

		if (signOut) {
			return route.private ? getRouteOfType(RouteType.Home) : route;
		}

		return route;
	};

	const setAuthReturnRoute = async () => {
		const validAuthReturnRouteTypes = [RouteType.Content, RouteType.Home];
		const currentRoute = getCurrentRoute();
		const currentAuthReturnRoute = await getAuthReturnRoute();

		if (validAuthReturnRouteTypes.some((rt) => rt === currentRoute.type)) {
			set(StorageKey.AuthNReturnRoute, currentRoute);
		} else if (!currentAuthReturnRoute) {
			set(StorageKey.AuthNReturnRoute, getHomeRoute());
		}
	};

	return {
		getAuthReturnRoute,
		setAuthReturnRoute
	};
};

export default useAuthNService;
