import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../../apis/spider-api';

export const getInfo = createAsyncThunk('user-info/get', async (email, { rejectWithValue }) => {
	const response = await getUserInfo(email);

	if (response.statusCode === 500) {
		return rejectWithValue(response);
	}

	return response;
});
