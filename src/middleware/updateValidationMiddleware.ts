import { Request, Response, NextFunction } from "express";
import { updateValidation, errorHandler } from "../schema/updateValidation";

export const updateValidationMiddleware = function (req: Request, res: Response, next: NextFunction) {
    const errors = errorHandler(req.body, updateValidation);

    if (typeof errors === 'object' && errors !== null && !Array.isArray(errors)) {
        return res.status(422).json({
            success: false,
            error: errors
        })
    }
    next();
}