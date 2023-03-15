import useAuthN from '../../useAuthN';

const SignOut = () => {
	const { signOut } = useAuthN();

	signOut();

	return <>LOADER</>;
};

export default SignOut;
