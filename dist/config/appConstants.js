"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConstants = void 0;
const zod_1 = require("zod");
const parseEnv_1 = require("../common/parseEnv");
exports.appConstants = (0, parseEnv_1.parseEnv)(zod_1.z.object({
    PORT: zod_1.z.number(),
}));
