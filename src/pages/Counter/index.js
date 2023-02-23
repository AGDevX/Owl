import { useEffect } from 'react';
import useCounterService from '../../services/useCounterService';
import useUserService from '../../services/userUserService';
import './styles.css';

const Counter = () => {
	const { count, decrementCounter, incrementCounter } = useCounterService();
	const { getUserInfo } = useUserService();

	useEffect(() => {
		const get = async (email) => {
			var info = await getUserInfo(email);
			return info;
		};
		get('agdevx@gmail.com');
	}, []);
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

export default Counter;
