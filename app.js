const express = require("express");
const { connect } = require("mongoose");

const app = express();

//! Connect DB - mongodb://localhost:27017
connect("mongodb://localhost/misfit-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("DB Connected Succesfully 🥳"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on post ${port} 🚀`));
