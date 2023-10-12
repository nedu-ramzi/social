import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import { config } from '../config/main.config';
import { CloudinaryStorage } from "multer-storage-cloudinary";

// const storage1 = multer.diskStorage({

// //     destination: function (req, file, cb) {
// //         cb(null, 'uploads/');
// //     },
// //     filename: function (req, file, cb) {
// //         cb(null, Date.now() + '-' + file.originalname);
// //     }
// });


// Initialize Cloudinary configuration using the config function
config.storage.cloudinary;

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
        return {
            folder: 'Test', // Specify the folder in Cloudinary where you want to store uploads
            allowed_formats: ['jpg', 'jpeg', 'png', 'gif'], // Specify allowed file formats
            public_id: `${file.fieldname}-${Date.now()}` // Set a unique public_id for each uploaded file
        };
    },
});

export const upload = multer({ storage: storage });
