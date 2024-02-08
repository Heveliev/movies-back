const Joi = require("joi");


const updateFavoriteMovieSchema = Joi.object({
    favorite: Joi.boolean().required()
});

module.exports = {updateFavoriteMovieSchema};