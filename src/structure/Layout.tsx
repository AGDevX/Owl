import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';

export const Layout = (): React.ReactNode => {
	return (
		<>
			<nav>
				<NavBar />
			</nav>
			<br />
			<main>
				<Outlet />
			</main>
		</>
	);
};
