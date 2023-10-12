"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordReset = void 0;
const mongoose_1 = require("mongoose");
const PasswordResetSchema = new mongoose_1.Schema({
    email: {
        type: String,
    },
    resetToken: {
        type: String,
    }
}, { timestamps: true, expires: 30 });
exports.PasswordReset = (0, mongoose_1.model)('PasswordReset', PasswordResetSchema);
//# sourceMappingURL=password.reset.model.js.map