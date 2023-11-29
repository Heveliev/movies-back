const {moviesService} = require("../../models");

const addMovie = async(req, res) => {
    const result = await moviesService.addMovie(req.body);
    res.status(201).json(result);
};

module.exports = addMovie;