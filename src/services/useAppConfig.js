import { useSelector } from 'react-redux';

const useAppConfig = () => {
	const appConfig = useSelector((state) => state.appConfig);

	return appConfig;
};

export default useAppConfig;
