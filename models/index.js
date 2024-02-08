const {User, userRegisterSchema,userLoginSchema} = require("./user");
const {movieAddSchema, updateFavoriteMovieSchema,Movie} = require("./movie");



module.exports = {
    User,
    userRegisterSchema,
    userLoginSchema,
    movieAddSchema,
    updateFavoriteMovieSchema,
    Movie,
};