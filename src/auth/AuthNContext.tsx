import { useAppConfig } from 'services/useAppConfig';

import { AuthZeroContext } from './providers/authZero/AuthZeroContext';

export const AuthNContext = ({ children }: AuthNContextProps) => {
	const { provider, oidcScopes, auth0 } = useAppConfig().AUTH;

	const renderContext = () => {
		switch (provider) {
			default:
			case 'auth0':
				return (
					<AuthZeroContext oidcScopes={oidcScopes} authProviderConfig={auth0}>
						{children}
					</AuthZeroContext>
				);
		}
	};

	return <>{renderContext()}</>;
};

interface AuthNContextProps {
	children: React.ReactNode;
}
