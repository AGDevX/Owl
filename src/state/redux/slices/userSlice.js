import { createSlice } from '@reduxjs/toolkit';

import { getInfo } from '../thunks/userThunk';
import { SliceStatus } from './sliceStatus';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		info: null,
		status: SliceStatus.Initial
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getInfo.pending, (state) => {
				state.status = SliceStatus.Loading;
			})
			.addCase(getInfo.fulfilled, (state, action) => {
				state.status = SliceStatus.Loaded;
				state.info = action.payload;
			})
			.addCase(getInfo.rejected, (state) => {
				state.status = SliceStatus.LoadFailed;
			});
	}
});

export default userSlice.reducer;
