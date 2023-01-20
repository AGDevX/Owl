import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../initialState';

export const appConfigSlice = createSlice({
	name: 'appConfig',
	initialState: {
		...initialState
	},
	reducers: {}
});

export default appConfigSlice.reducer;
