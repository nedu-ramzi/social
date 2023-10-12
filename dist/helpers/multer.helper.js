"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = require("cloudinary");
const main_config_1 = require("../config/main.config");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
// const storage1 = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         cb(null, 'uploads/');
// //     },
// //     filename: function (req, file, cb) {
// //         cb(null, Date.now() + '-' + file.originalname);
// //     }
// });
// Initialize Cloudinary configuration using the config function
main_config_1.config.storage.cloudinary;
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: (req, file) => {
        return {
            folder: 'Test',
            allowed_formats: ['jpg', 'jpeg', 'png', 'gif'],
            public_id: `${file.fieldname}-${Date.now()}` // Set a unique public_id for each uploaded file
        };
    },
});
exports.upload = (0, multer_1.default)({ storage: storage });
//# sourceMappingURL=multer.helper.js.map