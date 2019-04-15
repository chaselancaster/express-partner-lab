const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const Video = require("./models/Videogames");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/videogames", (req, res) => {
  res.render("index.ejs", {
    vg: Video
  });
});

app.listen(3000, () => {
  console.log("app listening on port: 3000");
});
