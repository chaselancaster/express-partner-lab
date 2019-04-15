const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const gameRouter = require("./routes/videogames.js");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use("/videogames", gameRouter);

app.listen(3000, err => {
  console.log(err || "app listening on port: 3000");
});
