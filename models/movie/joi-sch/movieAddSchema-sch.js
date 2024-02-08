const Joi = require("joi");



const movieAddSchema = Joi.object({
    title: Joi.string().required(),
    director: Joi.string().required(),
});

module.exports = {movieAddSchema}