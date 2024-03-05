import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { AuthNContext } from 'auth/AuthNContext';

import { store } from 'state/redux/store';

import { Layout } from 'structure/Layout';

export const App = () => {
	return (
		<Provider store={store}>
			<AuthNContext>
				<Layout>
					<Outlet />
				</Layout>
			</AuthNContext>
		</Provider>
	);
};
