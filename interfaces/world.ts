import { CoreBasicBlock } from './registry';
import { Position } from './types';

export interface CoreWorldManager {
	worlds: { [index: string]: CoreWorld };
	worldGenerator: { [index: string]: CoreWorldGenerator };
	create(name: string, seed: number, generator: string): CoreWorld | null;
	load(name: string): CoreWorld | null;
	unload(name: string): void;
	exist(name: string): boolean;
	get(name: string): CoreWorld | undefined;
	addGenerator(name: string, gen: any): void;
}

export interface CoreWorld {
	name: string;
	seed: number;
	generator: CoreWorldGenerator;
	version: number;
	entities: object;
	folder: string;

	constructor();

	saveAll(): void;

	getSettings(): {
		name: string;
		seed: number;
		generator: string;
		version: number;
	};

	getBlock(data: Position, allowgen: boolean): CoreBasicBlock;
	setBlock(data: Position, block: string | number | CoreBasicBlock, allowgen: boolean): Promise<void>;

	unload(): void;
}


export interface CoreWorldGenerator {
	name: string;
	seed: number;
}
