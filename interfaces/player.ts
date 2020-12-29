import { IParentedPermissionHolder } from './permissions';
import { ICoreSocket } from './socket';
import { Position } from './types';
import { ICoreWorld } from './world';

export interface ICorePlayerManager {
	players: { [index: string]: ICorePlayer };
	banlist: { [index: string]: string };
	ipbanlist: { [index: string]: string };
	cache: { [index: string]: { [index: string]: string } };

	create(id: string, data: any, socket: any): ICorePlayer;
	read(id: string): object | null;
	exist(id: string): boolean;
	save(id: string, data: object);
	get(id: string): ICorePlayer | null;
	getAll(): { [index: string]: ICorePlayer };
	isBanned(id: string): boolean;
	isIPBanned(ip: string): boolean;
	getBanReason(id: string): string;
	getIPBanReason(ip: string): string;
	banPlayer(id: string, reason?: string): void;
	banIP(ip: string, reason?: string): void;
}

export interface ICorePlayer {
	readonly id: string;
	readonly nickname: string;
	readonly ipAddress: string;
	readonly socket: ICoreSocket;
	displayName: string;
	world: ICoreWorld;
	permissions: IParentedPermissionHolder;

	getObject(): { id: string; ipAddress: string; nickname: string; world: string; permissions: object, permissionparents: object };
	remove(): void;
	teleport(pos: Position, world: string | ICoreWorld) : void;
	move(pos: Position): void;
	send(msg): void;
	rotate(rot: number | null, pitch: number | null): void;
	kick(reason?: string): void;
	ban(reason?: string): void;
	banIP(reason?: string): void;
}
