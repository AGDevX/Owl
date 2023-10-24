import { createSlice } from '@reduxjs/toolkit';

import { getInfo } from '../thunks/userThunk';
import { SliceStatus } from './sliceStatus';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		reduxStatus: SliceStatus.Initial,
		httpStatusCode: undefined,
		httpStatusText: undefined,
		code: undefined,
		messages: undefined,
		value: undefined
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getInfo.pending, (state) => {
				state.reduxStatus = SliceStatus.Loading;
			})
			.addCase(getInfo.fulfilled, (state, action) => {
				state.reduxStatus = SliceStatus.Loaded;

				const httpResponse = action.payload;
				state.httpStatusCode = httpResponse.statusCode;
				state.httpStatusText = httpResponse.statusText;

				state.code = httpResponse.data.code;
				state.messages = httpResponse.data.messages;
				state.value = httpResponse.data.value;
			})
			.addCase(getInfo.rejected, (state, action) => {
				state.reduxStatus = SliceStatus.LoadFailed;

				if (action.payload) {
					const httpResponse = action.payload;
					state.httpStatusCode = httpResponse.statusCode;
					state.httpStatusText = httpResponse.statusText;
				} else if (action.error) {
					state.httpStatusText = action.error.message;
				}
			});
	}
});

export default userSlice.reducer;
