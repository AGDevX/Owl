import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { StateStatus, StateStatusType } from 'state/StateStatus';

import { UserInfo } from 'apis/spider-api/UserInfo';
import { getUserInfo } from 'apis/spider-api/spider-api';

import type { RootState } from './store';

/*** Thunk Action Creators ***/

export const getInfo = createAsyncThunk<UserInfo | undefined, string>('user-info/get', async (email, { rejectWithValue }) => {
	const appHttpResponse = await getUserInfo(email);
	if (!appHttpResponse.isOk) {
		return rejectWithValue(appHttpResponse.data);
	}
	return appHttpResponse.data?.value;
});

/*** Slice ***/

interface userInitialState {
	status: StateStatusType;
	value: UserInfo | undefined;
}

const _userinitialState: userInitialState = {
	status: StateStatus.Initial,
	value: undefined
};

export const userSlice = createSlice({
	name: 'user',
	initialState: _userinitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getInfo.pending, (state) => {
				state.status = StateStatus.Loading;
			})
			.addCase(getInfo.fulfilled, (state, action) => {
				state.status = StateStatus.Loaded;
				state.value = action.payload;
			})
			.addCase(getInfo.rejected, (state) => {
				state.status = StateStatus.LoadFailed;
				state.value = undefined;
			});
	}
});

/*** Selectors ***/

export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector;

export const status = (state: RootState) => state.user.status;
export const value = (state: RootState) => state.user.value;

/*** Reducer ***/

export default userSlice.reducer;
