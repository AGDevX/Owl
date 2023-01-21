import { Provider } from 'react-redux';

import store from './state/redux/store';
import AuthNProvider from './auth/authN/AuthNProvider';
import Layout from './structure/Layout';

const App = () => {
	return (
		<Provider store={store}>
			<AuthNProvider>
				<Layout />
			</AuthNProvider>
		</Provider>
	);
};

export default App;
