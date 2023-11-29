const {moviesService} = require("../../models");
const getAllMovies = async(_,res) => {
    const result = await moviesService.getAllMovies();
    res.json(result);
};

module.exports = getAllMovies;