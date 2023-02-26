import { createAsyncThunk } from '@reduxjs/toolkit';
import { navigateToErrorRoute } from './reduxHistoryThunk';
import { getUserInfo } from '../../../apis/spider-api';

export const getInfo = createAsyncThunk('user-info/get', async (email, { dispatch, rejectWithValue }) => {
	const response = await getUserInfo(email);

	if (response.statusCode === 500) {
		dispatch(navigateToErrorRoute());
		return rejectWithValue(response);
	}

	return response;
});
