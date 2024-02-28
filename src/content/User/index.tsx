import { useUserService } from 'services/userUserService';

export const User = () => {
	const userInfo = useUserService('august.geier@reddwarfjmcagdx.com');

	return (
		<>
			<h1>User Info</h1>
			<pre>{JSON.stringify(userInfo, null, 2)}</pre>
		</>
	);
};
