export type PermissionList = { [index: string]: boolean | null };
export type PermissionHolderList = { [index: string]: ICorePermissionHolder };

export interface ICorePermissionManager {
	createGroup(name: string, group: ICorePermissionHolder): void;
	removeGroup(name: string): void;
	getGroup(name: string): ICorePermissionHolder;
	getAllGroups(): PermissionHolderList;
}

export interface ICorePermissionHolder {
	check(perm: string | string[]): null | boolean;
	checkStrict(perm: string | string[]): null | boolean;
	add(perm: string, bool: boolean): void;
	remove(perm: string): void;
}

export interface IParentedPermissionHolder extends ICorePermissionHolder {
	addParent(parent: string): void;
	removeParent(parent: string): void;
}
