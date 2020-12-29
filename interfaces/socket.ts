export interface CoreSocket {
	ip: string;

	on(type: string, listener: Function): void;
	send(type: string, data: object): void;
	close(): void;
}