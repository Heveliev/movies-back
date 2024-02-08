const express = require("express");

const {movieController} = require("../../controllers");
const {movieAddSchema} = require("../../models");
const {validateBody} = require("../../decorators");

const router = express.Router();


router.get("/", movieController.getAllMovies);

router.get("/:id", movieController.getMovieById);

router.post("/", validateBody(movieAddSchema), movieController.addMovie);

router.put("/:id",validateBody(movieAddSchema), movieController.updateMovieById);

router.delete("/:id", movieController.deleteMovieById);

module.exports = router;