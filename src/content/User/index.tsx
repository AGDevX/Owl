import { useEffect, useState } from 'react';

import { UserInfo } from '../../apis/spider-api/UserInfo';
import { useUserService } from '../../services/userUserService';

export const User = () => {
	const [apiUserInfo, setApiUserInfo] = useState<UserInfo | null>(null);
	const { userInfo, getUserInfo } = useUserService();

	useEffect(() => {
		const get = async (email: string) => {
			var info = await getUserInfo(email);
			setApiUserInfo(info);
		};
		get('august.geier@reddwarfjmcagdx.com');
	}, []);

	return (
		<>
			<h1>Api User Info</h1>
			<pre>{JSON.stringify(apiUserInfo, null, 2)}</pre>
			<br />
			<br />
			<h1>Redux User Info</h1>
			<pre>{JSON.stringify(userInfo, null, 2)}</pre>
		</>
	);
};
