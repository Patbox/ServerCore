import type { ICoreMessageBuilder } from "./interfaces/message";

export let MessageBuilder: { new(): ICoreMessageBuilder };
export let MessageStringify: (text: any) => string;

export function server_setMessageBuilder(builder: { new(): ICoreMessageBuilder }) {
	MessageBuilder = builder;
}

export function server_setMessageStringify(func: (text: any) => string) {
	MessageStringify = func;
}