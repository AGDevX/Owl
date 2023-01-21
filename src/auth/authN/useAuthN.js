import useAuthZero from './providers/auth0/useAuthZero';
import useAppConfig from '../../services/useAppConfig';

const useAuthN = () => {
	const { provider } = useAppConfig().AUTH_N;

	if (provider === 'auth0') {
		const auth0Config = useAppConfig().AUTH_N.auth0;
		return useAuthZero(auth0Config);
	} else {
		const auth0Config = useAppConfig().AUTH_N.auth0;
		return useAuthZero(auth0Config);
	}
};

export default useAuthN;
