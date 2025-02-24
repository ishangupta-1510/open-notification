"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEnv = void 0;
const logger_1 = require("./logger");
const httpException_1 = require("./httpException");
const http_status_codes_1 = require("http-status-codes");
const parseEnv = (schema) => {
    try {
        logger_1.logger.info('env validation started');
        const parsedEnv = schema.parse(process.env);
        return parsedEnv;
    }
    catch (err) {
        logger_1.logger.error(`env validation failed ${err}`);
        throw new httpException_1.HttpException(http_status_codes_1.StatusCodes.BAD_REQUEST, 'failed env validation');
    }
};
exports.parseEnv = parseEnv;
