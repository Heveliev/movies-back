const {ctrlWrapper} = require("../../decorators");

const getAllMovies = require("./getAllMovies");
const getMovieById = require("./getMovieById");
const addMovie = require("./addMovie");
const updateMovieById = require("./updateMovieById");
const deleteMovieById = require("./deleteMovieById");


module.exports = {
    getAllMovies: ctrlWrapper(getAllMovies),
    getMovieById: ctrlWrapper(getMovieById),
    addMovie: ctrlWrapper(addMovie),
    updateMovieById: ctrlWrapper(updateMovieById),
    deleteMovieById: ctrlWrapper(deleteMovieById),
};