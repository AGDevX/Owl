import { useAppConfig } from '../../services/useAppConfig';
import './styles.css';

const Home = () => {
	const appConfig = useAppConfig();

	return (
		<>
			<div className='silver'>
				<pre>{JSON.stringify(appConfig, null, 2)}</pre>
			</div>
		</>
	);
};

export default Home;
