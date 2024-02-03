export interface AppHttpResponse<T> {
	isOk: boolean;
	statusCode: number;
	statusText: string;
	type: ResponseType;
	redirected: boolean;
	url: string;
	headers: Headers;
	data: T | null | undefined;
}
