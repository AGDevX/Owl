import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../initialState';
import { get, remove } from '../thunks/albumThunk';
import { SliceStatus } from './sliceStatus';

export const albumSlice = createSlice({
	name: 'albums',
	initialState: {
		value: initialState.APP_INITIAL_STATE.albums,
		status: SliceStatus.Initial
	},
	reducers: {
		//-- For if I wanted to call this directly (i.e. dispatch(removeSlice);) instead of using a Thunk and simply returning the payload
		// removeSlice: (state, action) => {
		// 	state.value = state.value.filter((a) => a.id !== action.payload);
		// }
	},
	extraReducers: (builder) => {
		builder
			.addCase(get.pending, (state, action) => {
				state.status = SliceStatus.Loading;
			})
			.addCase(get.fulfilled, (state, action) => {
				state.status = SliceStatus.Loaded;
				state.value = state.value.concat(action.payload);
			})
			.addCase(get.rejected, (state, action) => {
				state.status = SliceStatus.LoadFailed;
			})
			.addCase(remove.pending, (state, action) => {
				state.status = SliceStatus.Loading;
			})
			.addCase(remove.fulfilled, (state, action) => {
				state.status = SliceStatus.Loaded;
				state.value = state.value.filter((a) => a.id !== action.payload);
			})
			.addCase(remove.rejected, (state, action) => {
				state.status = SliceStatus.LoadFailed;
			});
	}
});

//-- See comment above
// export const { removeSlice } = albumSlice.actions;

export default albumSlice.reducer;
