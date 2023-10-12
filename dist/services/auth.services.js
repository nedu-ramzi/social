"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const errors_helper_1 = require("../helpers/errors.helper");
const user_model_1 = require("../models/user.model");
const argon2_1 = __importDefault(require("argon2"));
const jwt_services_1 = require("./jwt.services");
const mail_service_1 = __importDefault(require("../services/mail/mail.service"));
const main_config_1 = require("../config/main.config");
const register = async (payload) => {
    const { firstname, lastname, email, password, confirmPassword, birthDate, profileImage } = payload;
    if (password !== confirmPassword) {
        throw new errors_helper_1.ApplicationError('Passwords not the same', 422);
    }
    const existingEmail = await user_model_1.User.findOne({ email });
    if (existingEmail) {
        throw new errors_helper_1.ApplicationError('A user account with this mail already exist', 422);
    }
    const hashPassword = await argon2_1.default.hash(password);
    // Define the email options
    const options = {
        from: main_config_1.config.services.mail.auth.user,
        to: email,
        subject: 'Registeration Successful',
        template: 'registerUser',
        context: {
            firstname: firstname,
            lastname: lastname
        },
    };
    // Send the email
    mail_service_1.default.sendMail(options, (error, info) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log('Email sent:', info.response);
        }
    });
    return await user_model_1.User.create({
        firstname,
        lastname,
        email,
        password: hashPassword,
        birthDate,
        profileImage
    });
};
exports.register = register;
const login = async (payload) => {
    const { email, password } = payload;
    const user = await user_model_1.User.findOne({ email: email });
    if (!user)
        throw new errors_helper_1.ApplicationError('User account not found', 404);
    const verifyPassword = argon2_1.default.verify(user.password, password);
    if (!verifyPassword)
        throw new errors_helper_1.ApplicationError('Invalid email or password', 401);
    //generate token
    const authUser = {
        sub: user.id,
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email,
        image: user.profileImage
    };
    return (0, jwt_services_1.issueToken)(authUser);
};
exports.login = login;
//# sourceMappingURL=auth.services.js.map