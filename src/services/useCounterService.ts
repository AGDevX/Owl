import { decrement, increment, useCounterSelector } from 'state/redux/counterSlice';
import { useAppDispatch } from 'state/redux/store';

export const useCounterService = () => {
	const dispatch = useAppDispatch();

	const count = useCounterSelector((state) => state.counter.value);

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
