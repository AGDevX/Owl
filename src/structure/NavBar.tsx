import React from 'react';
import { Link } from 'react-router-dom';

import { useRoutingService } from 'routing/useRoutingService';

export const NavBar = (): React.ReactNode => {
	const { allRoutes } = useRoutingService();

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
