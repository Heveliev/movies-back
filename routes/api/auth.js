const express = require("express");

const {authController} = require("../../controllers");
const {validateBody} = require("../../decorators");
const {userRegisterSchema, userLoginSchema} = require("../../models");
const {authenticate} = require("../../middlewares");



const router = express.Router();


router.post("/register", validateBody(userRegisterSchema), authController.register);

router.post("/login", validateBody(userLoginSchema), authController.login);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

module.exports = router;