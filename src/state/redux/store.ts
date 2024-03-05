import { useDispatch } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { jsonPlaceholderApi } from 'apis/json-placeholder-api';
import { spiderApi } from 'apis/spider-api';

import appConfigReducer from './appConfigSlice';
import counterReducer from './counterSlice';

export const store = configureStore({
	reducer: {
		appConfig: appConfigReducer,
		counter: counterReducer,
		[jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
		[spiderApi.reducerPath]: spiderApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware).concat(spiderApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
