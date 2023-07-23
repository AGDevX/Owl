import { precacheAndRoute } from 'workbox-precaching';
import { offlineFallback } from 'workbox-recipes';

self.__WB_DISABLE_DEV_LOGS = true;

precacheAndRoute(self.__WB_MANIFEST);

/* Offline */
offlineFallback({
	pageFallback: '/offline.html'
});
