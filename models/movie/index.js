const {movieAddSchema,updateFavoriteMovieSchema} = require("./joi-sch");
const {Movie} = require("./mongoose-sch");


module.exports = {
    movieAddSchema,
    updateFavoriteMovieSchema,
    Movie,
};