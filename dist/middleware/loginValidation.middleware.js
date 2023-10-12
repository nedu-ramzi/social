"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidationMiddleware = void 0;
const loginValidation_1 = require("../schema/loginValidation");
const loginValidationMiddleware = function (req, res, next) {
    const errors = (0, loginValidation_1.errorHandler)(req.body, loginValidation_1.loginValidation);
    if (typeof errors === 'object' && errors !== null && !Array.isArray(errors)) {
        return res.status(422).json({
            success: false,
            error: errors
        });
    }
    next();
};
exports.loginValidationMiddleware = loginValidationMiddleware;
//# sourceMappingURL=loginValidation.middleware.js.map