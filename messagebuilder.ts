import { ICoreMessageBuilder } from "./interfaces/messagebuilder";

export let MessageBuilder: ICoreMessageBuilder;

export function server_setMessageBuilder(builder: ICoreMessageBuilder) {
	MessageBuilder = builder;
}



