export const handleHttpResponse = async (httpResponse) => {
	let responseData;

	const contentType = httpResponse.headers.get('content-type');

	if (contentType.includes('application/json')) {
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

	const headers = [];
	httpResponse.headers.forEach(function (value, key) {
		headers.push({ key, value });
	});

	const response = {
		isOk: httpResponse.ok,
		statusCode: httpResponse.status,
		statusText: httpResponse.statusText,
		type: httpResponse.type,
		redirected: httpResponse.redirected,
		url: httpResponse.url,
		headers,
		data: responseData
	};

	return response;
};

export const handleHttpError = (error) => {
	throw Error(`Http call failed: ${JSON.stringify(error)}`);
};
