export default {
	...env //-- made available via `new webpack.DefinePlugin({ env: JSON.stringify(env) })` in webpack.*.js
};
