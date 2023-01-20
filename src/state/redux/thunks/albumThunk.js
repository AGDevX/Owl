//-- https://redux.js.org/usage/writing-logic-thunks#using-createasyncthunk
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAlbums } from '../../../apis/useJsonPlaceholderApi';
import { removeSlice } from '../slices/albumSlice';

export const get = createAsyncThunk('album/get', async (albumId) => {
	debugger;
	// const jsonPlaceholderApi = useJsonPlaceholderApi();
	const albums = await getAlbums(albumId);
	return albums;
});

export const remove = createAsyncThunk('album/remove', async (id, thunkApi) => {
	debugger;
	thunkApi.dispatch(removeSlice(id));
});
