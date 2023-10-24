import useAuthZero from '../providers/auth0/useAuthZero';
import useAppConfig from '../../services/useAppConfig';

const useAuthN = () => {
	const authConfig = useAppConfig().AUTH;

	if (authConfig.provider === 'auth0') {
		return useAuthZero(authConfig);
	} else {
		return useAuthZero(authConfig);
	}
};

export default useAuthN;
