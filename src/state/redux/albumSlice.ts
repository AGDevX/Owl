//-- Excellent gif! -- https://redux.js.org/tutorials/essentials/part-5-async-logic#thunks-and-async-logic
//-- https://redux.js.org/usage/writing-logic-thunks#using-createasyncthunk
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { StateStatus, StateStatusType } from 'state/StateStatus';

import { Album } from 'apis/json-placeholder-api/Album';
import { getAlbums } from 'apis/json-placeholder-api/json-placeholder-api';

import type { RootState } from './store';

/*** Thunk Action Creators ***/

export const get = createAsyncThunk<Array<Album>, number | null>('album/get', async (albumId, { rejectWithValue }) => {
	const appHttpResponse = await getAlbums(albumId);

	if (!appHttpResponse.isOk) {
		return rejectWithValue(appHttpResponse.data);
	}

	return appHttpResponse.data as Array<Album>;
});

export const remove = createAsyncThunk('album/remove', async (albumId: number) => {
	return albumId;
});

/*** Slice ***/

export const albumSlice = createSlice({
	name: 'albums',
	initialState: {
		status: {} as Record<string, StateStatusType>,
		value: {} as Record<string, Album>
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
				var key = !action.meta.arg ? 'all' : action.meta.arg;
				state.status[key] = StateStatus.Loading;
			})
			.addCase(get.fulfilled, (state, action) => {
				var key = !action.meta.arg ? 'all' : action.meta.arg;
				state.status[key] = StateStatus.Loading;

				//-- For each album in the payload (which is an array of albums), add it to the state (if it doesn't already exist)
				action.payload.forEach((album) => {
					if (!state.value[album.id]) {
						state.status[album.id] = StateStatus.Loaded;
						state.value[album.id] = album;
					}
				});
			})
			.addCase(get.rejected, (state, action) => {
				var key = !action.meta.arg ? 'all' : action.meta.arg;
				state.status[key] = StateStatus.LoadFailed;
				if (state.value[key]) {
					delete state.value[key];
				}
			})
			.addCase(remove.pending, (state, action) => {
				state.status[action.meta.arg] = StateStatus.Loading;
			})
			.addCase(remove.fulfilled, (state, action) => {
				state.status[action.meta.arg] = StateStatus.Loaded;

				if (state.value[action.meta.arg]) {
					delete state.value[action.meta.arg];
				}
			})
			.addCase(remove.rejected, (state, action) => {
				state.status[action.meta.arg] = StateStatus.LoadFailed;
			});
	}
});

/*** Selectors ***/

export const useAlbumSelector: TypedUseSelectorHook<RootState> = useSelector;

export const status = (state: RootState, name: string) => state.albums.status[name];
export const value = (state: RootState, name: string) => state.albums.value[name];

//-- See comment above
// export const { removeSlice } = albumSlice.actions;

/*** Reducer ***/

export default albumSlice.reducer;
