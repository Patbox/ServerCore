import { ICoreBasicBlock } from './registry';
import { Position } from './types';

export interface ICoreWorldManager {
	worlds: { [index: string]: ICoreWorld };
	worldGenerator: { [index: string]: ICoreWorldGenerator };
	create(name: string, seed: number, generator: string): ICoreWorld | null;
	load(name: string): ICoreWorld | null;
	unload(name: string): void;
	exist(name: string): boolean;
	get(name: string): ICoreWorld | undefined;
	addGenerator(name: string, gen: any): void;
}

export interface ICoreWorld {
	name: string;
	seed: number;
	generator: ICoreWorldGenerator;
	version: number;
	entities: object;
	folder: string;

	saveAll(): void;

	getSettings(): {
		name: string;
		seed: number;
		generator: string;
		version: number;
	};

	getBlock(data: Position, allowgen: boolean): ICoreBasicBlock;
	setBlock(data: Position, block: string | number | ICoreBasicBlock, allowgen: boolean): Promise<void>;

	unload(): void;
}


export interface ICoreWorldGenerator {
	name: string;
	seed: number;
}
