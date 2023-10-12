"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.registerValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerValidation = joi_1.default.object({
    firstname: joi_1.default.string().min(3).max(35).required(),
    lastname: joi_1.default.string().min(3).max(35).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).max(30)
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
    confirmPassword: joi_1.default.string().min(6).max(30)
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
    birthDate: joi_1.default.date()
});
const errorHandler = function (payload, schema) {
    const { error } = schema.validate(payload, { abortEarly: false });
    // let errors = {};
    let errors = {};
    if (error) {
        error.details.forEach((item) => {
            let key = item.context.key;
            let errorBag = {
                message: item.message,
            };
            errors[key] = errorBag;
        });
        return errors;
    }
    return null;
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=registerValidation.js.map