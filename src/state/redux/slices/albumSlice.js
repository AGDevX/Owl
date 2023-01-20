import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../initialState';
import { get } from '../thunks/albumThunk';
import { SliceStatus } from './sliceStatus';

export const albumSlice = createSlice({
	name: 'albums',
	initialState: {
		value: initialState.APP_INITIAL_STATE.albums,
		status: SliceStatus.Initial
	},
	reducers: {
		removeSlice: (state, action) => {
			debugger;
			state.value = state.value.filter((a) => a.id !== action.payload);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(get.pending, (state, action) => {
				debugger;
				state.status = SliceStatus.Loading;
			})
			.addCase(get.fulfilled, (state, action) => {
				debugger;
				state.status = SliceStatus.Loaded;
				state.value = state.value.concat(action.payload);
			})
			.addCase(get.rejected, (state, action) => {
				debugger;
				state.status = SliceStatus.LoadFailed;
			});
	}
});

export const { removeSlice } = albumSlice.actions;

export default albumSlice.reducer;
