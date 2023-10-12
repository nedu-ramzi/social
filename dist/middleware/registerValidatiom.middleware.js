"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regValidationMiddleware = void 0;
const registerValidation_1 = require("../schema/registerValidation");
const regValidationMiddleware = function (req, res, next) {
    const errors = (0, registerValidation_1.errorHandler)(req.body, registerValidation_1.registerValidation);
    if (typeof errors === 'object' && errors !== null && !Array.isArray(errors)) {
        return res.status(422).json({
            success: false,
            error: errors
        });
    }
    next();
};
exports.regValidationMiddleware = regValidationMiddleware;
//# sourceMappingURL=registerValidatiom.middleware.js.map