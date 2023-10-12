import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import { config } from '../../config/main.config';
import path from 'path';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport(config.services.mail);

// Define the options for Handlebars templates
const options = {
    viewEngine: {
        extname: '.hbs', // Specify the extension of your email template files
        layoutsDir: path.resolve('src/services/mail/templates'), // Directory where your layout templates are stored
        defaultLayout: 'registerUser', // Default layout template
        partialsDir: path.resolve('src/services/mail/templates'), // Directory where your partial templates are stored
    },
    viewPath: path.resolve('src/services/mail/templates'), // Directory where your email templates are stored
    extName: '.hbs', // File extension for your email templates
};

// Attach the plugin to the Nodemailer transporter
transporter.use('compile', hbs(options));


export default transporter;