/* eslint-disable no-unused-vars */

export interface IClientStorageService {
	get: <T>(key: string) => Promise<T | undefined>;
	set: <T>(key: string, value: any) => Promise<T | undefined>;
	remove: (key: string) => Promise<void>;
	clear: () => Promise<void>;
	key: (index: number) => Promise<string | undefined>;
	keys: () => Promise<ReadonlyArray<string> | undefined>;
	length: () => Promise<number | undefined>;
}
