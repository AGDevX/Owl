import useAuthZero from './auth0/useAuthZero';
import useAppConfig from '../../services/useAppConfig';

const useAuthN = () => {
	const { provider } = useAppConfig().AUTH_N;

	if (provider === 'auth0') {
		return useAuthZero();
	} else {
		return useAuthZero();
	}
};

export default useAuthN;
