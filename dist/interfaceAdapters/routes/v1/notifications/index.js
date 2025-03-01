"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthCheck_1 = __importDefault(require("../../../../application/healthCheck"));
const notificationRouter = (0, express_1.default)();
notificationRouter.get('/health-check', healthCheck_1.default);
