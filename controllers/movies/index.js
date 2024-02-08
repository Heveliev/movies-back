const {ctrlWrapper} = require("../../decorators");

const {getAllMovies} = require("./getAllMovies");
const {getMovieById} = require("./getMovieById");
const {addMovie} = require("./addMovie");
const {updateMovieById} = require("./updateMovieById");
const {updateMovieFavorite} = require("./updateMovieFavorite");
const {deleteMovieById} = require("./deleteMovieById");


module.exports = {
    getAllMovies: ctrlWrapper(getAllMovies),
    getMovieById: ctrlWrapper(getMovieById),
    addMovie: ctrlWrapper(addMovie),
    updateMovieById: ctrlWrapper(updateMovieById),
    updateMovieFavorite: ctrlWrapper(updateMovieFavorite),
    deleteMovieById: ctrlWrapper(deleteMovieById),
};