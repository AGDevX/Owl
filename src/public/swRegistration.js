const enableServiceWorker = env.APP.enableServiceWorker;

export const registerServiceWorker = async () => {
	if (enableServiceWorker) {
		if ('serviceWorker' in navigator) {
			try {
				const registration = await navigator.serviceWorker.register('/sw.js', {
					type: 'module'
				});
				console.debug(registration);
			} catch (err) {
				console.debug(`There was an error registering service worker: ${err.message}`);
			}
		} else {
			console.debug('Service workers are not supported by this browser');
		}
	} else {
		console.debug('Service worker disabled');
	}
};

export const unregisterServiceWorker = async () => {
	if ('serviceWorker' in navigator) {
		try {
			const registration = await navigator.serviceWorker.getRegistration();
			if (registration) {
				const result = await registration.unregister();
				console.debug(result ? 'The service worker was unregistered' : 'The service worker could not be unregistered');
			} else {
				console.debug('There is no service worker to unregister');
			}
		} catch (err) {
			console.debug(`There was an error unregistering service worker: ${err.message}`);
		}
	} else {
		console.debug('Service workers are not supported by this browser');
	}
};
