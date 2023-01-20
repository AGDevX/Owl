//-- Excellent gif! -- https://redux.js.org/tutorials/essentials/part-5-async-logic#thunks-and-async-logic
//-- https://redux.js.org/usage/writing-logic-thunks#using-createasyncthunk
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAlbums } from '../../../apis/jsonPlaceholderApi';

export const get = createAsyncThunk('album/get', async (albumId) => {
	const albums = await getAlbums(albumId);
	return albums;
});

//-- An unawaited asyncThunk is unnecessary. It will dispatch a pending event that is kind of wasted.
//--	However, this approach seems cleaner than having albumThunk and albumSlice reference each other (see the comment below)
export const remove = createAsyncThunk('album/remove', async (albumId) => {
	return albumId;
});

//-- This works, but it's confusing that albumThunk and albumSlice reference each other
// import { removeSlice } from '../slices/albumSlice';
// export const remove = createAsyncThunk('album/remove', async (id, thunkApi) => {
// 	thunkApi.dispatch(removeSlice(id));
// });
