"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_services_1 = require("../services/jwt.services");
const errors_helper_1 = require("../helpers/errors.helper");
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader.split(' ')[1];
    if (!token)
        throw new errors_helper_1.ApplicationError('Invalid User Credentials', 401);
    res.locals.user = (0, jwt_services_1.verifyToken)(token);
    req.body.usr = 'Harry';
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map