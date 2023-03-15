import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

const Layout = () => {
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

export default Layout;
