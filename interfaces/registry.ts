

export interface IRegistry {
	items: { [index: string]: IBasicItem };
	blocks: { [index: string]: IBasicBlock };
	commands: { [index: string]: ICommand };

	addItem(item: IBasicItem): void;
	addBlock(item: IBasicBlock): void;
	addCommand(item: ICommand): void;
}

export interface IBasicItem {
	id: string;
	numId: number;
	name: string;
	stack: number;

	getObject(): object;
}

export interface IBasicBlock {
	id: string;
	numId: number;
	name: string;

	getObject(): object;
}

export interface ICommand {
	command: string;
	description: string;
	trigger: (executor, arg: String[]) => {};
}