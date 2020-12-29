"use strict";
exports.__esModule = true;
exports.server_setMessageStringify = exports.server_setMessageBuilder = exports.MessageStringify = exports.MessageBuilder = void 0;
function server_setMessageBuilder(builder) {
    exports.MessageBuilder = builder;
}
exports.server_setMessageBuilder = server_setMessageBuilder;
function server_setMessageStringify(func) {
    exports.MessageStringify = func;
}
exports.server_setMessageStringify = server_setMessageStringify;
