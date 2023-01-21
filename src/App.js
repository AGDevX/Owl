import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './state/redux/store';
import AuthNProvider from './auth/authN/AuthNProvider';

const App = () => {
	return (
		<Provider store={store}>
			<AuthNProvider>
				<Outlet />
			</AuthNProvider>
		</Provider>
	);
};

export default App;
