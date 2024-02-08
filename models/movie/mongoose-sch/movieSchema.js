const {Schema, model} = require("mongoose");
const {boolean} = require("joi");


const genreList = ["fantastic", "love story"];

const movieSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    director: {
        type: String,
        required:true,
    },
    favorite: {
        type: Boolean,
        required:true,
        default:false,
    },
    genre: {
        type: String,
        enum:genreList,
        required: true,
    },

});
