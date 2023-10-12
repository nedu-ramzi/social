import { Router } from "express";
import { deleteUserById, updateUserById, getUserByEmail, getUserbyId, getAllUsers } from '../controllers/user.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { updateValidationMiddleware } from "../middleware/updateValidationMiddleware";

export default (router: Router) => {
    router.get('/users', authMiddleware, getAllUsers);

    router.get('/users/email', authMiddleware, getUserByEmail);
    router.get('/users/:id', authMiddleware, getUserbyId);

    router.patch('/users/:id', authMiddleware, updateValidationMiddleware, updateUserById);
    router.delete('/users/:id', authMiddleware, deleteUserById);
}