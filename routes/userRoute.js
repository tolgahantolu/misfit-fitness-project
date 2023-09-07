const express = require("express");
const { body } = require("express-validator");
const User = require("../models/User");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/signup")
  .post(
    [
      body("name").not().isEmpty().withMessage("Please enter your fullname!"),
      body("email").isEmail().withMessage("Please enter a valid email!"),
      body("password").not().isEmpty().withMessage("Please enter a password!"),
    ],
    authController.createUser
  );

router.route("/login").post(authController.loginUser);

module.exports = router;
