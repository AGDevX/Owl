import localForage from 'localforage';

import useAppConfig from '../services/useAppConfig';

const useClientStorage = () => {
	const { driver, name, version, storeName, description } = useAppConfig().CLIENT_STORAGE.localForage;

	localforage.config({
		driver
		name,
		version,
		storeName,
		description
	});

	const getItem = async () => {

	}

	const setItem = async () => {

	}

	const removeItem = async () => {

	}

	const clear = async () => {

	}

	const key = async () => {

	}

	const keys = async () => {

	}

	const length = async () => {

	}

	return {};
};

export default useClientStorage;
