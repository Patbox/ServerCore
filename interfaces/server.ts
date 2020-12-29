import { CoreLogger } from './logger';
import { CorePermissionHolder, CorePermissionManager } from './permissions';
import { IPlayer, CorePlayerManager } from './player';
import { CoreBasicBlock, CoreBasicItem, CoreCommand, CoreRegistry } from './registry';
import { CoreSocket } from './socket';
import { Position } from './types';
import { CoreWorld, CoreWorldManager } from './world';

export interface CoreServer {
	registry: CoreRegistry;
	worlds: CoreWorldManager;
	players: CorePlayerManager;
	permissions: CorePermissionManager;
	log: CoreLogger;

	console: {
		executor: {
			name: '#console';
			id: '#console';
			send(...args: any[]): void;
			permissions: CorePermissionHolder;
		};
	};

	connectPlayer(socket: CoreSocket): void;
	emit(type: string, data: object);

	on<U extends keyof CoreServerEvents>(event: U, listener: CoreServerEvents[U]): this;

	loadConfig(namespace: string, config: string): object;

	saveConfig(namespace: string, config: string, data: object);
}

export interface CoreServerEvents {
	'server-started': eh<CoreServer>;
	'server-stop': eh<CoreServer>;
	'server-stopped': eh<CoreServer>;
	'server-config-update': eh<object>;

	'registry-prefinalize': () => void;
	'registry-define': () => void;
	'registry-finalize': () => void;

	'item-predefine': eh<CoreBasicItem>;
	'item-define': eh<CoreBasicItem>;

	'block-predefine': eh<CoreBasicBlock>;
	'block-define': eh<CoreBasicBlock>;

	'command-predefine': eh<CoreCommand>;
	'command-define': eh<CoreCommand>;

	'world-create': eh<CoreWorld>;
	'world-load': eh<CoreWorld>;
	'world-unload': eh<string>;

	'player-create': eh<IPlayer>;
	'player-firstjoin': eh<IPlayer>;
	'player-join': eh<IPlayer>;
	'player-ban': (id: string, reason: string) => void;
	'player-ipban': (id: string, reason: string) => void;
	'player-remove': eh<IPlayer>;
	'player-quit': eh<IPlayer>;
	'player-move': (player: IPlayer, position: Position) => {};
	'player-blockbreak-x': (player: IPlayer, data: object) => {};
	'player-blockplace-x': (player: IPlayer, data: object) => {};
	'player-click-x': (player: IPlayer, data: object) => {};
	'player-move-x': (player: IPlayer, data: object) => {};
	'player-message-x': (player: IPlayer, data: object) => {};
	'player-command': (player: IPlayer, command: string, arg: string[]) => {};
	
	'chat-message': eh<string>;

	[index: string]: any;


}

type eh<x> = (x: x) => void;
