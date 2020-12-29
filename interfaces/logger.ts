export interface ILogger {
	normal(...args: any[]): void;
	chat(...args: any[]): void;
	warn(...args: any[]): void;
	error(...args: any[]): void;
}

