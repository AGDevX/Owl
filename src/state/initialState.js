export const initialState = {
	...env //-- made available via `new webpack.DefinePlugin({ env: JSON.stringify(env) })` in webpack.*.js
};
