import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { registerServiceWorker } from './public/swRegistration';
import browserRouter from './routing/browserRouter';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(
	//-- https://stackoverflow.com/questions/48846289/why-is-my-react-component-is-rendering-twice
	<React.StrictMode>
		<RouterProvider router={browserRouter} />
	</React.StrictMode>
);

registerServiceWorker();
