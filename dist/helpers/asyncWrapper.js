"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncWrapper = void 0;
const asyncWrapper = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    }
    catch (e) {
        next(e);
    }
};
exports.asyncWrapper = asyncWrapper;
//# sourceMappingURL=asyncWrapper.js.map