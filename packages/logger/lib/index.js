"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consola_1 = __importDefault(require("consola"));
const logger = {
    success: (msg) => { consola_1.default.success(msg); },
    info: (msg) => { consola_1.default.info(msg); },
    error: (msg) => { consola_1.default.error(msg); }
};
exports.default = logger;
//# sourceMappingURL=index.js.map