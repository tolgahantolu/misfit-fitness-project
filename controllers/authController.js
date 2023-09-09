const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    const errors = validationResult(req);

    console.log(errors);

    for (let i = 0; i < errors.array().length; i++) {
      console.log(errors.array()[i].msg);
    }

    //todo: show error popup

    res.status(400).redirect("/register");

    console.log("REGISTER!! Something went wrong: ", error.message);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const comparePassw = bcrypt.compare(password, user.password);

      if (comparePassw) {
        res.status(200).redirect("/users/dashboard");
      } else {
        res.status(400).json({
          status: "fail",
          error: "Your password is not correct",
        });
      }
    } else {
      res.status(400).json({
        status: "fail",
        error: "User is not exist!",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.getDashboardPage = async (req, res) => {
  res.status(200).render("dashboard", {
    page_name: "dashboard",
  });
};
