import React from 'react';
import { Link } from 'react-router-dom';

import useRouting from '../routing/useRouting';

const NavBar = () => {
	const { allRoutes } = useRouting();

	return (
		<>
			{allRoutes.map((r, index) => {
				return (
					<React.Fragment key={r.id}>
						<Link to={r.path}>{r.name}</Link>
						{index !== allRoutes.length - 1 && <> | </>}
					</React.Fragment>
				);
			})}
		</>
	);
};

export default NavBar;
