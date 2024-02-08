const {HttpError} = require("../../helpers");
const {Movie} = require("../../models");

const getMovieById = async(req, res) => {
    const {id} = req.params;
    const result = await Movie.findById(id);
    if(!result) {
        throw HttpError(404,`Movie with ${id} not found`);
    };
    res.json(result);
};

module.exports = {getMovieById};