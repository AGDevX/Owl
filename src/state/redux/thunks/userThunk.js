import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../../apis/spider-api';

export const getInfo = createAsyncThunk('user-info/get', async (email) => {
	const userInfo = (await getUserInfo(email)).data;
	return userInfo;
});
