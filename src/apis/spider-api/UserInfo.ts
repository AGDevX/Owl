export interface UserInfo {
	user: Person;
	externalUserIds: Array<ExternalUserId>;
	roles: Array<UserRole>;
}

interface Person {
	id: string;
	isActive: boolean;
	email: string;
	firstName: string;
	middleName?: string;
	lastName: string;
	suffix?: string;
}

interface ExternalUserId {
	id: string;
	isActive: boolean;
	userId: string;
	externalId: string;
}

interface UserRole {
	userId: string;
	roleId: string;
	roleName: string;
	roleCode: string;
	roleDescription: string;
	roleIsActive: boolean;
}
