"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
const registerValidatiom_middleware_1 = require("../middleware/registerValidatiom.middleware");
const upload_middleware_1 = require("../middleware/upload.middleware");
exports.default = (router) => {
    router.post('/auth/register', registerValidatiom_middleware_1.regValidationMiddleware, upload_middleware_1.fileUpload, auth_controller_1.registerUser);
    router.post('/auth/login', auth_controller_1.loginUser);
};
//# sourceMappingURL=authentication.js.map