import { createSlice } from '@reduxjs/toolkit';

import initialState from '../../initialState';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: initialState.APP_INITIAL_STATE.counter
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

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;