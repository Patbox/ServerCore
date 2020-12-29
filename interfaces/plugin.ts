export interface ICorePlugin {
	name: string;
	version: string;
	supportedAPI: string;
	game: string | '*';
	supportedGameAPI: string | '*';
	[index: string]: any; 
}