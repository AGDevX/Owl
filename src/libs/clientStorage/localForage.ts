import * as localforage from 'localforage';
import { ILocalForageConfig } from '../../../environments/IConfig';

//-- https://localforage.github.io/localForage/

const useLocalForage = (config: ILocalForageConfig) => {
	var store = localforage.createInstance(config);

	const get = async (key: string): Promise<string | undefined> => {
		try {
			const itemStr = await store.getItem<string>(key);
			const item = JSON.parse(itemStr!);
			return item;
		} catch (err) {
			console.log(err);
		}
		return undefined;
	};

	const set = async (key: string, value: string): Promise<string | undefined> => {
		try {
			//-- localForage is having trouble serializing objects, so we'll do it
			value = JSON.stringify(value);
			await store.setItem(key, value);
		} catch (err) {
			console.log(err);
		}

		const item = await get(key);
		return item;
	};

	const remove = async (key: string): Promise<void> => {
		try {
			await store.removeItem(key);
		} catch (err) {
			console.log(err);
		}
	};

	const clear = async () => {
		try {
			await store.clear();
		} catch (err) {
			console.log(err);
		}
	};

	const key = async (index: number): Promise<string | undefined> => {
		try {
			return index >= 0 ? await store.key(index) : undefined;
		} catch (err) {
			console.log(err);
		}

		return undefined;
	};

	const keys = async (): Promise<ReadonlyArray<string> | undefined> => {
		try {
			return await store.keys();
		} catch (err) {
			console.log(err);
		}
	};

	const length = async (): Promise<number | undefined> => {
		try {
			return await store.length();
		} catch (err) {
			console.log(err);
		}
	};

	return {
		get,
		set,
		remove,
		clear,
		key,
		keys,
		length
	};
};

export default useLocalForage;
