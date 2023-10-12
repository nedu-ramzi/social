"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const cloudinary_1 = require("cloudinary");
(0, dotenv_1.config)();
exports.config = {
    server: {
        port: parseInt(process.env.PORT, 10),
        mode: process.env.NODE_ENV,
    },
    database: async function () {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        mongoose_1.default.connection.on('error', (e) => {
            console.log(`We encountered the following error while trying to connect to the database: ${e.message}`);
        });
        mongoose_1.default.connection.on('open', () => {
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
        cloudinary: cloudinary_1.v2.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.API_KEY,
            secret: process.env.SECRET_KEY
        })
    }
};
//# sourceMappingURL=main.config.js.map