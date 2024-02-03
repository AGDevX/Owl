import { UserInfo } from '../apis/spider-api/UserInfo';
import { useAppDispatch } from '../state/redux/store';
import { getInfo, useUserSelector } from '../state/redux/userSlice';

export const useUserService = () => {
	const dispatch = useAppDispatch();
	const userInfo = useUserSelector((state) => state.user.value);

	const getUserInfo = async (email: string | null = null, ignoreCache: boolean = false): Promise<UserInfo | null> => {
		if (userInfo && userInfo.user.email === email && !ignoreCache) {
			return userInfo;
		}

		if (email) {
			var user = await dispatch(getInfo(email));
			return user.payload as UserInfo;
		}

		return null;
	};

	return {
		userInfo,
		getUserInfo
	};
};
