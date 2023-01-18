import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import appConfigReducer from './slices/appConfigSlice';

export default configureStore({
	reducer: {
		appConfig: appConfigReducer,
		counter: counterReducer
	}
});
