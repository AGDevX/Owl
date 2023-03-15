import useAppConfig from '../../services/useAppConfig';
import useLocalForage from './localForage';

export StorageKey from './storageKey';

export const useClientStorage = () => {
	const { provider } = useAppConfig().CLIENT_STORAGE;

	if (provider === 'localForage') {
		const localForageConfig = useAppConfig().CLIENT_STORAGE.localForage;
		return useLocalForage(localForageConfig);
	} else {
		const localForageConfig = useAppConfig().CLIENT_STORAGE.localForage;
		return useLocalForage(localForageConfig);
	}
};
