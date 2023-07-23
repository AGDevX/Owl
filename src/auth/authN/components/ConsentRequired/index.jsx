import { useLocation } from 'react-router-dom';

const ConsentRequired = () => {
	const { state } = useLocation();
	return (
		<>
			<span>We need your consent to perform this action.</span>
			<pre>{state.requiredScopes}</pre>
		</>
	);
};

export default ConsentRequired;
