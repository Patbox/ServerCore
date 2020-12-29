

export interface ICoreRegistry {
	items: { [index: string]: ICoreBasicItem };
	blocks: { [index: string]: ICoreBasicBlock };
	commands: { [index: string]: ICoreCommand };

	addItem(item: ICoreBasicItem): void;
	addBlock(item: ICoreBasicBlock): void;
	addCommand(item: ICoreCommand): void;
}

export interface ICoreBasicItem {
	id: string;
	numId: number;
	name: string;
	stack: number;

	getObject(): object;
}

export interface ICoreBasicBlock {
	id: string;
	numId: number;
	name: string;

	getObject(): object;
}

export interface ICoreCommand {
	command: string;
	description: string;
	trigger: (executor, arg: String[]) => {};
}