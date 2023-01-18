import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import appConfigReducer from './slices/appConfigSlice';
import albumReducer from './slices/albumSlice';

export default configureStore({
	reducer: {
		appConfig: appConfigReducer,
		counter: counterReducer,
		albums: albumReducer
	}
});
