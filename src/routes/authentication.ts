import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth.controller";
import { regValidationMiddleware } from "../middleware/registerValidatiom.middleware";
import { fileUpload } from '../middleware/upload.middleware';

export default (router: Router) => {
    router.post('/auth/register', regValidationMiddleware, fileUpload, registerUser);
    router.post('/auth/login', loginUser);
}