

export interface CoreRegistry {
	items: { [index: string]: CoreBasicItem };
	blocks: { [index: string]: CoreBasicBlock };
	commands: { [index: string]: CoreCommand };

	addItem(item: CoreBasicItem): void;
	addBlock(item: CoreBasicBlock): void;
	addCommand(item: CoreCommand): void;
}

export interface CoreBasicItem {
	id: string;
	numId: number;
	name: string;
	stack: number;

	getObject(): object;
}

export interface CoreBasicBlock {
	id: string;
	numId: number;
	name: string;

	getObject(): object;
}

export interface CoreCommand {
	command: string;
	description: string;
	trigger: (executor, arg: String[]) => {};
}