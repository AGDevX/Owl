import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../state/redux/slices/counterSlice';

const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	return (
		<div>
			<div>
				<button aria-label="Decrement value" onClick={handleDecrement}>
					Decrement
				</button>
				<span>{count}</span>
				<button aria-label="Increment value" onClick={handleIncrement}>
					Increment
				</button>
			</div>
		</div>
	);
};
export default Counter;
