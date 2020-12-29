import { IParentedPermissionHolder } from './permissions';
import { ISocket } from './socket';
import { Position } from './types';
import { IWorld } from './world';

export interface IPlayerManager {
	players: { [index: string]: IPlayer };
	banlist: { [index: string]: string };
	ipbanlist: { [index: string]: string };
	cache: { [index: string]: { [index: string]: string } };

	create(id: string, data: any, socket: any): IPlayer;
	read(id: string): object | null;
	exist(id: string): boolean;
	save(id: string, data: object);
	get(id: string): IPlayer | null;
	getAll(): { [index: string]: IPlayer };
	isBanned(id: string): boolean;
	isIPBanned(ip: string): boolean;
	getBanReason(id: string): string;
	getIPBanReason(ip: string): string;
	banPlayer(id: string, reason?: string): void;
	banIP(ip: string, reason?: string): void;
}

export interface IPlayer {
	readonly id: string;
	readonly nickname: string;
	readonly ipAddress: string;
	readonly socket: ISocket;
	displayName: string;
	world: IWorld;
	permissions: IParentedPermissionHolder;

	getObject(): { id: string; ipAddress: string; nickname: string; world: string; permissions: IParentedPermissionHolder };
	remove(): void;
	teleport(pos: Position, eworld: string | IWorld) : void;
	move(pos: Position): void;
	send(msg: string): void;
	rotate(rot: number | null, pitch: number | null): void;
	kick(reason?: string): void;
	ban(reason?: string): void;
	banIP(reason?: string): void;
}