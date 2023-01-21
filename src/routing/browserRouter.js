import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import routes from './routes';

import PrivateRoute from '../auth/authN/components/PrivateRoute';
import PublicRoute from '../auth/authN/components/PublicRoute';

import App from '../App';

const browserRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route element={<PublicRoute />}>
				{routes
					.filter((r) => r.enabled && !r.private)
					.map((r) => {
						return <Route key={r.id} path={r.path} element={r.element} />;
					})}
			</Route>
			<Route element={<PrivateRoute />}>
				{routes
					.filter((r) => r.enabled && r.private)
					.map((r) => {
						return <Route key={r.id} path={r.path} element={r.element} />;
					})}
			</Route>
		</Route>
	)
);

export default browserRouter;
