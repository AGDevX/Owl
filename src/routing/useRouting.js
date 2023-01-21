import { matchRoutes, useLocation } from 'react-router-dom';
import routes from './routes';

const useRouting = () => {
	const getCurrentRoute = () => {
		const location = useLocation();
		const { route } = matchRoutes(routes, location).find((m) => m.pathname === location.pathname);
		return route;
	};

	return {
		getCurrentRoute
	};
};

export default useRouting;
