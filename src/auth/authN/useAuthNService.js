import useRouting from '../../routing/useRouting';
import { useClientStorage, StorageKey } from '../../libs/clientStorage/useClientStorage';
import RouteType from '../../routing/routeType';

const useAuthNService = () => {
	const { getCurrentRoute, getHomeRoute } = useRouting();
	const { get, set } = useClientStorage();

	const getAuthReturnRoute = async (signOut = false) => {
		const route = (await get(StorageKey.AuthNReturnRoute)) ?? getHomeRoute();

		if (signOut) {
			return route.private ? getHomeRoute() : route;
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
