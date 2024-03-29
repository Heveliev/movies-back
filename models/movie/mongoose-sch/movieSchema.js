const {Schema, model} = require("mongoose");
const {releaseDateRegexp} = require("../../../RegExp");
const {handleMongooseError} = require("../../../helpers");
const {genreList} = require("../validMoviesData");


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
    releaseDate: {
        type: String,
        match: releaseDateRegexp,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
}, { versionKey: false, timestamps:true});


movieSchema.post("save", handleMongooseError);


const Movie = model("movie", movieSchema);

module.exports = {Movie};