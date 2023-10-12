import { config as dotenv } from 'dotenv';
import mongoose, { MongooseError } from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
dotenv();

export const config = {
    server: {
        port: parseInt(process.env.PORT, 10),
        mode: process.env.NODE_ENV,
    },
    database: async function () {
        await mongoose.connect(process.env.MONGODB_URI);

        mongoose.connection.on('error', (e: MongooseError) => {
            console.log(`We encountered the following error while trying to connect to the database: ${e.message}`)
        });

        mongoose.connection.on('open', () => {
            console.info('Mongo Database connection successful');
        });
    },
    services: {
        mail: {
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT),
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        },
        jwt: {
            expiresIn: '24hr',
            secret: process.env.JWT_SECRET,
        },
    },
    storage: {
        cloudinary: cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.API_KEY,
            secret: process.env.SECRET_KEY
        })
    }

};

