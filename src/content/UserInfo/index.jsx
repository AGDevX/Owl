import { useEffect, useState } from 'react';
import useUserService from '../../services/userUserService';

const UserInfo = () => {
	const [directUserInfo, setDirectUserInfo] = useState(null);
	const { userInfo, getUserInfo } = useUserService();

	useEffect(() => {
		const get = async (email) => {
			var info = await getUserInfo(email);
			setDirectUserInfo(info);
		};
		get('august.geier@reddwarfjmcagdx.com');
	}, []);

	return (
		<>
			<h1>Direct User Info</h1>
			<pre>{JSON.stringify(directUserInfo, null, 2)}</pre>
			<br />
			<br />
			<h1>Redux User Info</h1>
			<pre>{JSON.stringify(userInfo, null, 2)}</pre>
		</>
	);
};

export default UserInfo;
