const {Movie} = require("../../models");


const LIMIT = 10;
const PAGE = 1;
const getAllMovies = async(req,res) => {
    const {_id: owner} = req.user;
    const {page = PAGE, limit = LIMIT} = req.query;
    const skip = (page - 1) * limit;
    const result = await Movie.find({owner},  "-createdAt -updatedAt", {skip, limit}).populate("owner", "email name");
    res.json(result);
};

module.exports = {getAllMovies};