const {HttpError} = require("../../helpers");
const {Movie} = require("../../models");


const updateMovieById = async(req, res) => {
    const {id} = req.params;
    const result = await Movie.findByIdAndUpdate(id, req.body, {new:true});
    if(!result) {
        throw HttpError(404, `Movie with ${id} not found`);

    };
    res.json(result);
};

module.exports = {updateMovieById};