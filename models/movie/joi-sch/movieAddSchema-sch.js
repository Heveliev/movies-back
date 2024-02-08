const Joi = require("joi");
const {releaseDateRegexp} = require("../../../RegExp");
const {genreList} = require("../validMoviesData");

const movieAddSchema = Joi.object({
    title: Joi.string().required(),
    director: Joi.string().required().messages({
        "any.required": `"director" must be exist`,
        "string.base": `"director" must be text`,
    }),
    favorite: Joi.boolean(),
    genre: Joi.string().valid(...genreList).required(),
    releaseDate: Joi.string().pattern(releaseDateRegexp).required(),
});

module.exports = {movieAddSchema}