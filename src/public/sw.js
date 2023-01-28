import { offlineFallback } from 'workbox-recipes';

self.__WB_MANIFEST;

/* Offline */
offlineFallback({
	pageFallback: '/offline.html'
});
