import useAuthZero from './providers/auth0/useAuthZero';
import useAppConfig from '../../services/useAppConfig';

const useAuthN = () => {
	const authNConfig = useAppConfig().AUTH_N;

	if (authNConfig.provider === 'auth0') {
		return useAuthZero(authNConfig);
	} else {
		return useAuthZero(authNConfig);
	}
};

export default useAuthN;
