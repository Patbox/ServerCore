import type { ICoreMessageBuilder } from "./interfaces/message";

export let MessageBuilder: { new(): ICoreMessageBuilder };

export function server_setMessageBuilder(builder: { new(): ICoreMessageBuilder }) {
	MessageBuilder = builder;
}



