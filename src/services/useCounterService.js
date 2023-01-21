import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '../state/redux/slices/counterSlice';

const useCounterService = () => {
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

export default useCounterService;
