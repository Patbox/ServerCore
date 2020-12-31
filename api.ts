import type { ICoreMessageBuilderClass } from "./interfaces/message";

export let MessageBuilder: ICoreMessageBuilderClass;
export let MessageStringify: (text: any) => string;

export function server_setMessageBuilder(builder: ICoreMessageBuilderClass) {
	MessageBuilder = builder;
}

export function server_setMessageStringify(func: (text: any) => string) {
	MessageStringify = func;
}