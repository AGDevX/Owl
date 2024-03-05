import { useAuthService } from 'auth/useAuthService';

export const SignOut = (): React.ReactNode => {
	const { signOut } = useAuthService();

	signOut();

	return <>LOADER</>;
};
