export interface ICoreMessageBuilder {
	newLine(): this;
	black(): this;
	blue(): this;
	green(): this;
	cyan(): this;
	red(): this;
	purple(): this;
	orange(): this;
	grey(): this;
	lightGrey(): this;
	lightBlue(): this;
	lightGreen(): this;
	lightCyan(): this;
	pink(): this;
	magenta(): this;
	yellow(): this;
	white(): this;
	linethrough(): this;
	underline(): this;
	hex(hex: string): this;
	clear(): this;

	text(text: string): this;

	getOutput(): any;
}
