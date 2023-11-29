const express = require("express");

const {movieController} = require("../../controllers");
const {moviesSchemas} = require("../../schemas");
const {validateBody} = require("../../decorators");

const router = express.Router();


router.get("/", movieController.getAllMovies);

router.get("/:id", movieController.getMovieById);

router.post("/", validateBody(moviesSchemas.movieAddSchema), movieController.addMovie);

router.put("/:id",validateBody(moviesSchemas.movieAddSchema), movieController.updateMovieById);

router.delete("/:id", movieController.deleteMovieById);

module.exports = router;