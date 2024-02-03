import { useCounterService } from '../../services/useCounterService';

import './styles.css';

export const Counter = (): React.ReactNode => {
	const { count, decrementCounter, incrementCounter } = useCounterService();

	return (
		<div>
			<div>
				<button aria-label='Decrement value' onClick={decrementCounter}>
					Decrement
				</button>
				<span id='count'>{count}</span>
				<button aria-label='Increment value' onClick={incrementCounter}>
					Increment
				</button>
			</div>
		</div>
	);
};
