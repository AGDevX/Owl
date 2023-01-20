import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import appConfigReducer from './slices/appConfigSlice';
import albumReducer from './slices/albumSlice';

export default configureStore({
	reducer: {
		appConfig: appConfigReducer,
		counter: counterReducer,
		albums: albumReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// // Ignore these action types
				// ignoredActions: ['your/action/type'],
				// Ignore these field paths in all actions
				// ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
				// Ignore these paths in the state
				ignoredPaths: ['albums.status']
			}
		})
});
