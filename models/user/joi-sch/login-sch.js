const Joi = require("joi");
const {emailRegExp} = require("../../../RegExp");


const userLoginSchema = Joi.object({
    email: Joi.string().pattern(emailRegExp).required(),
    password: Joi.string().min(6).required(),
});

module.exports = {userLoginSchema};