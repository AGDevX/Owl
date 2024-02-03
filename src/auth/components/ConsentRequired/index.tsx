import { useLocation } from 'react-router-dom';

export const ConsentRequired = (): React.ReactNode => {
	const { state } = useLocation();

	return (
		<>
			<span>We need your consent to perform this action.</span>
			<pre>{state?.requiredScopes}</pre>
		</>
	);
};
