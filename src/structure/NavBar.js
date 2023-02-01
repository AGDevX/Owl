import { Link } from 'react-router-dom';

import useRouting from '../routing/useRouting';

const NavBar = () => {
	const { allRoutes } = useRouting();

	return (
		<>
			{allRoutes.map((r, index) => {
				return (
					<>
						<Link key={r.id} to={r.path}>
							{r.name}
						</Link>
						{index !== allRoutes.length - 1 && <> | </>}
					</>
				);
			})}
		</>
	);
};

export default NavBar;
