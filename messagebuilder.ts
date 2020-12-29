import type { ICoreMessageBuilder } from "./interfaces/message";

export let MessageBuilder: ICoreMessageBuilder;

export function server_setMessageBuilder(builder: ICoreMessageBuilder) {
	MessageBuilder = builder;
}



