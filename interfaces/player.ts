import { IParentedPermissionHolder } from './permissions';
import { CoreSocket } from './socket';
import { Position } from './types';
import { CoreWorld } from './world';

export interface CorePlayerManager {
	players: { [index: string]: CorePlayer };
	banlist: { [index: string]: string };
	ipbanlist: { [index: string]: string };
	cache: { [index: string]: { [index: string]: string } };

	create(id: string, data: any, socket: any): CorePlayer;
	read(id: string): object | null;
	exist(id: string): boolean;
	save(id: string, data: object);
	get(id: string): CorePlayer | null;
	getAll(): { [index: string]: CorePlayer };
	isBanned(id: string): boolean;
	isIPBanned(ip: string): boolean;
	getBanReason(id: string): string;
	getIPBanReason(ip: string): string;
	banPlayer(id: string, reason?: string): void;
	banIP(ip: string, reason?: string): void;
}

export interface CorePlayer {
	readonly id: string;
	readonly nickname: string;
	readonly ipAddress: string;
	readonly socket: CoreSocket;
	displayName: string;
	world: CoreWorld;
	permissions: IParentedPermissionHolder;

	getObject(): { id: string; ipAddress: string; nickname: string; world: string; permissions: IParentedPermissionHolder };
	remove(): void;
	teleport(pos: Position, eworld: string | CoreWorld) : void;
	move(pos: Position): void;
	send(msg: string): void;
	rotate(rot: number | null, pitch: number | null): void;
	kick(reason?: string): void;
	ban(reason?: string): void;
	banIP(reason?: string): void;
}
