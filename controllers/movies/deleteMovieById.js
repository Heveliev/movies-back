const {HttpError} = require("../../helpers");
const {Movie} = require("../../models");

const deleteMovieById = async(req, res) => {
    const {id} = req.params;
    const result = await Movie.findByIdAndDelete(id);
    if(!result) {
        throw HttpError(404, `Movie with ${id} not found`);

    };
    res.json({
        message: "Delete success",
    });
};

module.exports = {deleteMovieById};