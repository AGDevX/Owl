import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import { getRouteOfType } from '../../../routing/routes';
import RouteType from '../../../routing/routeType';

export const navigateToErrorRoute = createAsyncThunk('navigate-to/error', async (arg, { dispatch }) => {
	const errorRoute = getRouteOfType(RouteType.Error);
	dispatch(push(errorRoute.path));
});
