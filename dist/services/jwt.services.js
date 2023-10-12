"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.issueToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const main_config_1 = require("../config/main.config");
const issueToken = async (payload) => {
    return jsonwebtoken_1.default.sign(payload, main_config_1.config.services.jwt.secret, { expiresIn: main_config_1.config.services.jwt.expiresIn });
};
exports.issueToken = issueToken;
const verifyToken = async (token) => {
    return jsonwebtoken_1.default.verify(token, main_config_1.config.services.jwt.secret);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.services.js.map