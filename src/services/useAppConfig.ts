import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../state/redux/store';

const useAppConfigSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppConfig = () => {
	const appConfig = useAppConfigSelector((state) => state.appConfig);
	return appConfig;
};

export default useAppConfig;
