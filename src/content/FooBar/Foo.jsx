import { Outlet } from 'react-router-dom';

const Foo = () => {
	return (
		<>
			<h1>Foo</h1>
			<Outlet />
		</>
	);
};

export default Foo;
