const {moviesService} = require("../../models");
const {HttpError} = require("../../helpers");


const updateMovieById = async(req, res) => {
    const {id} = req.params;
    const result = await moviesService.updateMovieById(id,req.body);
    if(!result) {
        throw HttpError(404, `Movie with ${id} not found`);

    };
    res.json(result);
};

module.exports = updateMovieById;