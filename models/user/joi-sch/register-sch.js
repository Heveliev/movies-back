const Joi = require("joi");
const {emailRegExp} = require("../../../RegExp");


const userRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegExp).required(),
    password: Joi.string().min(6).required(),
});

module.exports = {userRegisterSchema};