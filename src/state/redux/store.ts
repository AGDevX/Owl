import { configureStore } from '@reduxjs/toolkit';
import appConfigReducer from './slices/appConfigSlice';
import userReducer from './slices/userSlice';
import counterReducer from './slices/counterSlice';
import albumReducer from './slices/albumSlice';

export const store = configureStore({
	reducer: {
		appConfig: appConfigReducer,
		user: userReducer,
		counter: counterReducer,
		albums: albumReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
