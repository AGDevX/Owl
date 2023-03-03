import { useDispatch, useSelector } from 'react-redux';

import { getInfo } from '../state/redux/thunks/userThunk';

const useUserService = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.user.value);

	const getUserInfo = async (email = null, ignoreCache = false) => {
		if (userInfo && userInfo.user.email === email && !ignoreCache) {
			return userInfo;
		}

		if (email) {
			var userInfo = await dispatch(getInfo(email));
			return userInfo.payload.data.value;
		}

		return null;
	};

	return {
		userInfo,
		getUserInfo
	};
};

export default useUserService;
