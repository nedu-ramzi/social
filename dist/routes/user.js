"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const updateValidationMiddleware_1 = require("../middleware/updateValidationMiddleware");
exports.default = (router) => {
    router.get('/users', auth_middleware_1.authMiddleware, user_controller_1.getAllUsers);
    router.get('/users/email', auth_middleware_1.authMiddleware, user_controller_1.getUserByEmail);
    router.get('/users/:id', auth_middleware_1.authMiddleware, user_controller_1.getUserbyId);
    router.patch('/users/:id', auth_middleware_1.authMiddleware, updateValidationMiddleware_1.updateValidationMiddleware, user_controller_1.updateUserById);
    router.delete('/users/:id', auth_middleware_1.authMiddleware, user_controller_1.deleteUserById);
};
//# sourceMappingURL=user.js.map