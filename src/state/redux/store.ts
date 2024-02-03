import { useDispatch } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import albumReducer from './albumSlice';
import appConfigReducer from './appConfigSlice';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

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
export const useAppDispatch: () => AppDispatch = useDispatch;
