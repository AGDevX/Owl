import { useSelector } from 'react-redux';

export const useAppConfig = () => {
	const appConfig = useSelector((state) => state.appConfig);

	return appConfig;
};
