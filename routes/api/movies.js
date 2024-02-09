const express = require("express");

const {movieController} = require("../../controllers");
const {movieAddSchema, updateFavoriteMovieSchema} = require("../../models");
const {validateBody} = require("../../decorators");
const {isValidId, authenticate} = require("../../middlewares");

const router = express.Router();



router.use(authenticate);

router.get("/", movieController.getAllMovies);

router.get("/:id", isValidId, movieController.getMovieById);

router.post("/", validateBody(movieAddSchema), movieController.addMovie);

router.put("/:id", isValidId, validateBody(movieAddSchema), movieController.updateMovieById);

router.patch("/:id/favorite", isValidId, validateBody(updateFavoriteMovieSchema), movieController.updateMovieFavorite)

router.delete("/:id", isValidId, movieController.deleteMovieById);

module.exports = router;