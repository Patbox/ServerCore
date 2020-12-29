import { IBasicBlock } from './registry';
import { Position } from './types';

export interface IWorldManager {
	worlds: { [index: string]: IWorld };
	worldGenerator: { [index: string]: IWorldGenerator };
	create(name: string, seed: number, generator: string): IWorld | null;
	load(name: string): IWorld | null;
	unload(name: string): void;
	exist(name: string): boolean;
	get(name: string): IWorld | null;
	addGenerator(name: string, gen: any): void;
}

export interface IWorld {
	name: string;
	seed: number;
	generator: IWorldGenerator;
	version: number;
	entities: object;
	folder: string;

	constructor();

	saveAll(): void;

	getSettings(): {
		name: string;
		seed: number;
		generator: IWorldGenerator;
		version: number;
	};

	getBlock(data: Position, allowgen: boolean): IBasicBlock;
	setBlock(data: Position, block: IBasicBlock, allowgen: boolean): Promise<void>;

	unload(): void;
}


export interface IWorldGenerator {
	name: string;
	seed: number;
}
