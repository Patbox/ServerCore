import { ICoreLogger } from './logger';
import { ICorePermissionHolder, ICorePermissionManager } from './permissions';
import { ICorePlayer, ICorePlayerManager } from './player';
import { ICorePluginManager } from './plugin';
import { ICoreBasicBlock, ICoreBasicItem, ICoreCommand, ICoreRegistry } from './registry';
import { ICoreSocket } from './socket';
import { Position } from './types';
import { ICoreWorld, ICoreWorldManager } from './world';

export interface ICoreServer {
	name: string;
	version: string;

	registry: ICoreRegistry;
	worlds: ICoreWorldManager;
	players: ICorePlayerManager;
	permissions: ICorePermissionManager;
	plugins: ICorePluginManager;
	log: ICoreLogger;

	console: {
		executor: {
			name: '#console';
			id: '#console';
			send(...args: any[]): void;
			permissions: ICorePermissionHolder;
		};
	};

	connectPlayer(socket: ICoreSocket): void;
	emit(type: string, data: object);

	on<U extends keyof ICoreServerEvents>(event: U, listener: ICoreServerEvents[U]): this;

	loadConfig(namespace: string, config: string): object;

	saveConfig(namespace: string, config: string, data: object): void;

	stopServer(): void;
}

export interface ICoreServerEvents {
	'server-started': eh<ICoreServer>;
	'server-stop': eh<ICoreServer>;
	'server-stopped': eh<ICoreServer>;
	'server-config-update': eh<object>;

	'registry-prefinalize': () => void;
	'registry-define': () => void;
	'registry-finalize': () => void;

	'item-predefine': eh<ICoreBasicItem>;
	'item-define': eh<ICoreBasicItem>;

	'block-predefine': eh<ICoreBasicBlock>;
	'block-define': eh<ICoreBasicBlock>;

	'command-predefine': eh<ICoreCommand>;
	'command-define': eh<ICoreCommand>;

	'world-create': eh<ICoreWorld>;
	'world-load': eh<ICoreWorld>;
	'world-unload': eh<string>;

	'player-create': eh<ICorePlayer>;
	'player-firstjoin': eh<ICorePlayer>;
	'player-join': eh<ICorePlayer>;
	'player-ban': (id: string, reason: string) => void;
	'player-ipban': (id: string, reason: string) => void;
	'player-remove': eh<ICorePlayer>;
	'player-quit': eh<ICorePlayer>;
	'player-move': (player: ICorePlayer, position: Position) => {};
	'player-blockbreak-x': (player: ICorePlayer, data: object) => {};
	'player-blockplace-x': (player: ICorePlayer, data: object) => {};
	'player-click-x': (player: ICorePlayer, data: object) => {};
	'player-move-x': (player: ICorePlayer, data: object) => {};
	'player-message-x': (player: ICorePlayer, data: object) => {};
	'player-command': (player: ICorePlayer, command: string, arg: string[]) => {};

	'chat-message': (string, ICorePlayer) => void;
	'chat-system-message': eh<string>;

}

type eh<x> = (x: x) => void;
