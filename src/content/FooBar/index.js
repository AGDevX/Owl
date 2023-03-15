import { Outlet } from 'react-router-dom';

const FooBar = () => {
	return (
		<>
			<h1>FooBar</h1>
			<Outlet />
		</>
	);
};

export default FooBar;
