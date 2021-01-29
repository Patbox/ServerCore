export interface ICorePlugin {
	name: string;
	version: string;
	supportedAPI: string;
	game: string;
	supportedGameAPI: string;
	[index: string]: any; 
}


export interface ICorePluginManager {
	get(name: string): ICorePlugin;
	getAll(): {[i: string]: ICorePlugin};
	load(path: string): boolean;
	loadAllNotLoaded(): boolean;
}