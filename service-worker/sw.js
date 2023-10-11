import { offlineFallback } from 'workbox-recipes';
import { setDefaultHandler } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

setDefaultHandler(new NetworkOnly());

offlineFallback();
