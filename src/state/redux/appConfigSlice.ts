import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { createSlice } from '@reduxjs/toolkit';

import { InitialState } from 'state/InitialState';

import type { RootState } from './store';

/*** Slice ***/

export const appConfigSlice = createSlice({
	name: 'appConfig',
	initialState: {
		...InitialState
	},
	reducers: {}
});

/*** Selectors ***/

export const useAppConfigSelector: TypedUseSelectorHook<RootState> = useSelector;

/*** Reducer ***/

export default appConfigSlice.reducer;
