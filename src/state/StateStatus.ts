export type StateStatusType = 'initial' | 'loading' | 'loaded' | 'load-failed';

export const StateStatus = Object.freeze({
	Initial: 'initial',
	Loading: 'loading',
	Loaded: 'loaded',
	LoadFailed: 'load-failed'
});
