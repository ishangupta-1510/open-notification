"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appConstants_1 = require("./config/appConstants");
const routes_1 = __importDefault(require("./interfaceAdapters/routes"));
const app = (0, express_1.default)();
app.use('/api', routes_1.default);
const PORT = appConstants_1.appConstants.port || 3000;
app.listen(PORT, `listening to port ${PORT}`);
