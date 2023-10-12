"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_helper_1 = require("../helpers/multer.helper");
const fileUpload = (req, res, next) => {
    // 'file' should match the name attribute in your HTML form input field
    multer_helper_1.upload.single('profileImage')(req, res, function (err) {
        if (err instanceof multer_1.default.MulterError) {
            console.log('A Multer error occurred when uploading');
            return res.status(400).json({ error: err.message });
        }
        else if (err) {
            console.log('An unknown error occurred');
            return res.status(500).json({ error: 'An error occurred while uploading the file.' });
        }
    });
    next();
};
exports.fileUpload = fileUpload;
//# sourceMappingURL=upload.middleware.js.map