import { Outlet } from 'react-router-dom';

export const FooBar = (): React.ReactNode => {
	return (
		<>
			<h1>FooBar</h1>
			<Outlet />
		</>
	);
};
