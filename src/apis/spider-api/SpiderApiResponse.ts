export interface SpiderApiResponse<T> {
	code: string;
	messages: Array<string>;
	value: T;
}
