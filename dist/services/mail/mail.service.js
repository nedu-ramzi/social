"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_express_handlebars_1 = __importDefault(require("nodemailer-express-handlebars"));
const main_config_1 = require("../../config/main.config");
const path_1 = __importDefault(require("path"));
// Create a Nodemailer transporter
const transporter = nodemailer_1.default.createTransport(main_config_1.config.services.mail);
// Define the options for Handlebars templates
const options = {
    viewEngine: {
        extname: '.hbs',
        layoutsDir: path_1.default.resolve('src/services/mail/templates'),
        defaultLayout: 'registerUser',
        partialsDir: path_1.default.resolve('src/services/mail/templates'), // Directory where your partial templates are stored
    },
    viewPath: path_1.default.resolve('src/services/mail/templates'),
    extName: '.hbs', // File extension for your email templates
};
// Attach the plugin to the Nodemailer transporter
transporter.use('compile', (0, nodemailer_express_handlebars_1.default)(options));
exports.default = transporter;
//# sourceMappingURL=mail.service.js.map