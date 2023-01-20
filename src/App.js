import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './state/redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<Outlet />
		</Provider>
	);
};

export default App;
