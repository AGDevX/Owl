import { configureStore } from '@reduxjs/toolkit';
import appConfigReducer from './slices/appConfigSlice';
import userReducer from './slices/userSlice';
import counterReducer from './slices/counterSlice';
import albumReducer from './slices/albumSlice';

export default configureStore({
	reducer: {
		appConfig: appConfigReducer,
		user: userReducer,
		counter: counterReducer,
		albums: albumReducer
	}
});
