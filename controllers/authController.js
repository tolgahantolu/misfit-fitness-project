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
    console.log("Tolgahan!! Something went wrong: ", error.message);
  }
};
