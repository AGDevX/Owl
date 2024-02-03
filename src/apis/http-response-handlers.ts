import { AppHttpResponse } from './AppHttpResponse';

export const handleHttpResponse = async <T>(httpResponse: Response) => {
	let responseData: any | null | undefined;

	const contentType = httpResponse.headers.get('content-type');

	if (contentType && contentType.includes('application/json')) {
		try {
			responseData = await httpResponse.json();
		} catch {
			throw Error(`Unexpected Content-Type. Expected application/json. Received ${contentType} `);
		}
	} else {
		try {
			responseData = await httpResponse.text();
		} catch {
			throw Error(`Unable to read HTTP response.`);
		}
	}

	if (!httpResponse.ok) {
		console.error(responseData || 'Error returned from the HTTP request');
	}

	const response: AppHttpResponse<T> = {
		isOk: httpResponse.ok,
		statusCode: httpResponse.status,
		statusText: httpResponse.statusText,
		type: httpResponse.type,
		redirected: httpResponse.redirected,
		url: httpResponse.url,
		headers: httpResponse.headers,
		data: responseData as T
	};

	return response;
};

export const handleNetworkError = (error: any) => {
	throw Error(`Http call failed due to network issue: ${JSON.stringify(error)}`);
};
