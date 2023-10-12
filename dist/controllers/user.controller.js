"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.getUserByEmail = exports.getUserbyId = exports.getAllUsers = void 0;
const user_model_1 = require("../models/user.model");
const asyncWrapper_1 = require("../helpers/asyncWrapper");
const errors_helper_1 = require("../helpers/errors.helper");
exports.getAllUsers = (0, asyncWrapper_1.asyncWrapper)(async (req, res) => {
    try {
        const user = await user_model_1.User.find();
        return res.status(200).json({
            success: true,
            message: 'All users returned successfully',
            data: {
                user
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({
            "success": false,
            "error": {
                "message": error.message,
                "code": error.code
            }
        });
    }
});
exports.getUserbyId = (0, asyncWrapper_1.asyncWrapper)(async (req, res) => {
    try {
        const user = await user_model_1.User.findById(req.params.id);
        return res.status(201).json({
            success: true,
            message: 'User selected by Id',
            data: {
                user: user
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({
            "success": false,
            "error": {
                "message": error.message,
                "code": error.code
            }
        });
    }
});
exports.getUserByEmail = (0, asyncWrapper_1.asyncWrapper)(async (req, res) => {
    try {
        const { email } = req.body;
        const user = await user_model_1.User.findOne({ email: email });
        return res.status(201).json({
            suceess: true,
            message: 'User successfully selected by email',
            data: {
                user: user
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({
            "success": false,
            "error": {
                "message": error.message,
                "code": error.code
            }
        });
    }
});
exports.updateUserById = (0, asyncWrapper_1.asyncWrapper)(async (req, res) => {
    try {
        const { firstname, lastname, birthDate, email, password, confirmPassword, profileImage } = req.body;
        if (password !== confirmPassword) {
            throw new errors_helper_1.ApplicationError('Passwords do not match', 422);
        }
        const user = await user_model_1.User.findByIdAndUpdate(req.params.id, { firstname, lastname, birthDate, email, password, profileImage }, { new: true });
        await user.save();
        return res.status(200).json({
            "success": true,
            "message": "Information Updated Successfully",
            "data": {
                "user": user
            }
        });
    }
    catch (error) {
        return res.status(400).json({
            "success": false,
            "error": {
                "message": error.message,
                "code": error.code
            }
        });
    }
});
exports.deleteUserById = (0, asyncWrapper_1.asyncWrapper)(async (req, res) => {
    try {
        const user = await user_model_1.User.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            suceess: true,
            message: 'User successfully deleted',
            data: {
                user: user
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({
            "success": false,
            "error": {
                "message": error.message,
                "code": error.code
            }
        });
    }
});
//# sourceMappingURL=user.controller.js.map