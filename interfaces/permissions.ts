export type PermissionList = { [index: string]: boolean | null };
export type PermissionHolderList = { [index: string]: IPermissionHolder };

export interface IPermissionManager {
	createGroup(name: string, group: IPermissionHolder): void;
	removeGroup(name: string): void;
	getGroup(name: string): IPermissionHolder;
	getAllGroups(): PermissionHolderList;
}

export interface IPermissionHolder {
	check(perm: string | string[]): null | boolean;
	checkStrict(perm: string | string[]): null | boolean;
	add(perm: string, bool: boolean): void;
	remove(perm: string): void;
}

export interface IParentedPermissionHolder extends IPermissionHolder {
	addParent(parent: string): void;
	removeParent(parent: string): void;
}
