const {Movie} = require("../../models");
const getAllMovies = async(_,res) => {
    const result = await Movie.find({},  "-createdAt -updatedAt");
    res.json(result);
};

module.exports = {getAllMovies};