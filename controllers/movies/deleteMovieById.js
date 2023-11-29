const {moviesService} = require("../../models");
const {HttpError} = require("../../helpers");


const deleteMovieById = async(req, res) => {
    const {id} = req.params;
    const result = await moviesService.deleteMovieById(id);
    if(!result) {
        throw HttpError(404, `Movie with ${id} not found`);

    };
    res.json({
        message: "Delete success",
    });
};

module.exports = deleteMovieById;