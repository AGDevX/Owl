import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import browserRouter from './routing/browserRouter';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={browserRouter} />
	</React.StrictMode>
);
