const {moviesService} = require("../../models");
const {HttpError} = require("../../helpers");

const getMovieById = async(req, res) => {
    const {id} = req.params;
    const result = await moviesService.getMovieById(id);
    if(!result) {
        throw HttpError(404,`Movie with ${id} not found`);
    };
    res.json(result);
};

module.exports = getMovieById;