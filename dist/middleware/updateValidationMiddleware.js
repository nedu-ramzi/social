"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidationMiddleware = void 0;
const updateValidation_1 = require("../schema/updateValidation");
const updateValidationMiddleware = function (req, res, next) {
    const errors = (0, updateValidation_1.errorHandler)(req.body, updateValidation_1.updateValidation);
    if (typeof errors === 'object' && errors !== null && !Array.isArray(errors)) {
        return res.status(422).json({
            success: false,
            error: errors
        });
    }
    next();
};
exports.updateValidationMiddleware = updateValidationMiddleware;
//# sourceMappingURL=updateValidationMiddleware.js.map