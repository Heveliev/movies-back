const {Movie} = require("../../models");
const addMovie = async(req, res) => {
    const {_id: owner} = req.user;
    const result = await Movie.create({...req.body, owner});
    res.status(201).json(result);
};

module.exports = {addMovie};