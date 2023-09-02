const express = require("express");
const { connect } = require("mongoose");

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

app.get("/", (req, res) => {
  res.render("index", {
    page_name: "home",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    page_name: "about",
  });
});
app.get("/service", (req, res) => {
  res.render("service", {
    page_name: "service",
  });
});
app.get("/news", (req, res) => {
  res.render("news", {
    page_name: "news",
  });
});
app.get("/trainer", (req, res) => {
  res.render("trainer", {
    page_name: "trainer",
  });
});
app.get("/gallery", (req, res) => {
  res.render("gallery", {
    page_name: "gallery",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    page_name: "contact",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on post ${port} 🚀`));
