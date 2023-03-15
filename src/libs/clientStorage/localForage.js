import localforage from 'localforage';

//-- https://localforage.github.io/localForage/

const useLocalForage = (config) => {
	var store = localforage.createInstance(config);

	const get = async (key) => {
		try {
			let item = await store.getItem(key);
			item = JSON.parse(item);
			return item;
		} catch (err) {
			console.log(err);
		}
	};

	const set = async (key, value) => {
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

	const remove = async (key) => {
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

	const key = async (index) => {
		try {
			return index >= 0 ? await store.key(index) : undefined;
		} catch (err) {
			console.log(err);
		}
	};

	const keys = async () => {
		try {
			return await store.keys();
		} catch (err) {
			console.log(err);
		}
	};

	const length = async () => {
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
