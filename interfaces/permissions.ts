export type PermissionList = { [index: string]: boolean | null };
export type PermissionHolderList = { [index: string]: CorePermissionHolder };

export interface CorePermissionManager {
	createGroup(name: string, group: CorePermissionHolder): void;
	removeGroup(name: string): void;
	getGroup(name: string): CorePermissionHolder;
	getAllGroups(): PermissionHolderList;
}

export interface CorePermissionHolder {
	check(perm: string | string[]): null | boolean;
	checkStrict(perm: string | string[]): null | boolean;
	add(perm: string, bool: boolean): void;
	remove(perm: string): void;
}

export interface IParentedPermissionHolder extends CorePermissionHolder {
	addParent(parent: string): void;
	removeParent(parent: string): void;
}
