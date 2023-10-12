"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = __importDefault(require("./authentication"));
const user_1 = __importDefault(require("./user"));
const router = (0, express_1.Router)();
exports.default = () => {
    (0, authentication_1.default)(router);
    (0, user_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map