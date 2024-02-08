const {Movie} = require("../../models");
const addMovie = async(req, res) => {
    const result = await Movie.create(req.body);
    res.status(201).json(result);
};

module.exports = {addMovie};