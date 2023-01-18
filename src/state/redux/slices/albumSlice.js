import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../initialState';

export const albumSlice = createSlice({
	name: 'albums',
	initialState: {
		value: initialState.APP_INITIAL_STATE.albums
	},
	reducers: {
		add: (state, action) => {
			state.value = state.value.concat(action.payload);
		},
		remove: (state, action) => {
			state.value = state.value.filter((a) => a.id !== action.payload);
		}
	}
});

export const { add, remove } = albumSlice.actions;

export default albumSlice.reducer;
