import { useDispatch } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { jsonPlaceholderApi } from 'apis/json-placeholder-api';

import appConfigReducer from './appConfigSlice';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

export const store = configureStore({
	reducer: {
		appConfig: appConfigReducer,
		user: userReducer,
		counter: counterReducer,
		[jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
