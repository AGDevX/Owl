import { useGetUserInfoQuery } from 'apis/spider-api/user';

export const useUserService = (email: string) => {
	const { data } = useGetUserInfoQuery(email);
	return { userInfo: data?.value };
};
