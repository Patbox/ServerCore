import { ILogger } from './logger';
import { IPermissionHolder, IPermissionManager } from './permissions';
import { IPlayer, IPlayerManager } from './player';
import { IBasicBlock, IBasicItem, ICommand, IRegistry } from './registry';
import { ISocket } from './socket';
import { Position } from './types';
import { IWorld, IWorldManager } from './world';

export interface IServer {
	registry: IRegistry;
	worlds: IWorldManager;
	players: IPlayerManager;
	permissions: IPermissionManager;
	log: ILogger;

	console: {
		executor: {
			name: '#console';
			id: '#console';
			send(...args: any[]): void;
			permissions: IPermissionHolder;
		};
	};

	connectPlayer(socket: ISocket): void;
	emit(type: string, data: object);

	on<U extends keyof ServerEvents>(event: U, listener: ServerEvents[U]): this;

	loadConfig(namespace: string, config: string);

	saveConfig(namespace: string, config: string, data: object);
}

export interface ServerEvents {
	'server-started': eh<IServer>;
	'server-stop': eh<IServer>;
	'server-stopped': eh<IServer>;
	'server-config-update': eh<object>;

	'registry-prefinalize': () => void;
	'registry-define': () => void;
	'registry-finalize': () => void;

	'item-predefine': eh<IBasicItem>;
	'item-define': eh<IBasicItem>;

	'block-predefine': eh<IBasicBlock>;
	'block-define': eh<IBasicBlock>;

	'command-predefine': eh<ICommand>;
	'command-define': eh<ICommand>;

	'world-create': eh<IWorld>;
	'world-load': eh<IWorld>;
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
