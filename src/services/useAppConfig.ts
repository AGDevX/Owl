import { useAppConfigSelector } from 'state/redux/appConfigSlice';

export const useAppConfig = () => {
	const appConfig = useAppConfigSelector((state) => state.appConfig);
	return appConfig;
};
