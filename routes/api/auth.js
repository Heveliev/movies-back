const express = require("express");

const {authController} = require("../../controllers");
const {validateBody} = require("../../decorators");
const {userRegisterSchema, userLoginSchema} = require("../../models");



const router = express.Router();


router.post("/register", validateBody(userRegisterSchema), authController.register);
router.post("/login", validateBody(userLoginSchema), authController.login);

module.exports = router;