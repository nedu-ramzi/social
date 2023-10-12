import multer from 'multer';
import { Request, Response, NextFunction } from 'express';
import { upload } from '../helpers/multer.helper';


export const fileUpload = (req: Request, res: Response, next: NextFunction) => {
    // 'file' should match the name attribute in your HTML form input field
    upload.single('profileImage')(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log('A Multer error occurred when uploading');
            return res.status(400).json({ error: err.message });
        } else if (err) {
            console.log('An unknown error occurred');
            return res.status(500).json({ error: 'An error occurred while uploading the file.' });
        }
        
    });

    next();
}