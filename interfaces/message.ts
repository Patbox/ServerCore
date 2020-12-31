export interface ICoreMessageBuilder {
	newLine(text?: string): this;
	black(text?: string): this;
	blue(text?: string): this;
	green(text?: string): this;
	cyan(text?: string): this;
	red(text?: string): this;
	purple(text?: string): this;
	orange(text?: string): this;
	grey(text?: string): this;
	lightGrey(text?: string): this;
	lightBlue(text?: string): this;
	lightGreen(text?: string): this;
	lightCyan(text?: string): this;
	pink(text?: string): this;
	magenta(text?: string): this;
	yellow(text?: string): this;
	white(text?: string): this;
	linethrough(text?: string): this;
	underline(text?: string): this;
	hex(hex: string): this;
	clear(): this;

	text(text: string): this;

	getGameOutput(): any;
	getOutput(): CoreMessage;
}

export interface ICoreMessageBuilderClass {
	new(base?: CoreMessage): ICoreMessageBuilder;
}

export type CoreMessage = { text: string; color: string; linethrough?: boolean; underline?: boolean }[];
