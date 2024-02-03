import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { createSlice } from '@reduxjs/toolkit';

import { InitialState } from 'state/InitialState';

import type { RootState } from './store';

/*** Thunk Action Creators ***/

/*** Slice ***/

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: InitialState.APP_INITIAL_STATE.counter
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		}
	}
});

/*** Selectors ***/

export const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

/*** Reducer ***/

export default counterSlice.reducer;
