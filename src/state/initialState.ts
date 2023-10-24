import { IEnvironment } from '../../environments/IConfig';

const initialState: IEnvironment = {
	// @ts-ignore
	...env
};

export default initialState;
