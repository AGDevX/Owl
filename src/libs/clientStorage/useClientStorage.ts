import { useAppConfig } from 'services/useAppConfig';

import { useLocalForage } from './useLocalForage';

export { StorageKey } from './storageKey';

export const useClientStorage = () => {
	const { provider } = useAppConfig().CLIENT_STORAGE;

	switch (provider) {
		default:
		case 'localForage': {
			const localForageConfig = useAppConfig().CLIENT_STORAGE.localForage;
			return useLocalForage(localForageConfig);
		}
	}
};
