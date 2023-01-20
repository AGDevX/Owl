import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '../state/redux/slices/counterSlice';

export const useCounterService = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.value);

	const incrementCounter = () => {
		dispatch(increment());
	};

	const decrementCounter = () => {
		dispatch(decrement());
	};

	return {
		count,
		incrementCounter,
		decrementCounter
	};
};
