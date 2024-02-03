import { Outlet } from 'react-router-dom';

export const Foo = (): React.ReactNode => {
	return (
		<>
			<h1>Foo</h1>
			<Outlet />
		</>
	);
};
