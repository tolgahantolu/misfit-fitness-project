const express = require("express");
const { connect } = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const userRoute = require("./routes/userRoute");

const app = express();

//! Connect DB - mongodb://localhost:27017
connect("mongodb://localhost/misfit-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("DB Connected Succesfully 🥳"));

//! Template Engine
app.set("view engine", "ejs");

//! Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! Routes
app.use("/", pageRoute);
app.use("/users", userRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on post ${port} 🚀`));
