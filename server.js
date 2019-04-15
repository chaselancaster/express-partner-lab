const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const Video = require('./models/Videogames');

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.listen(3000, () => {
    console.log('app listening on port: ' 3000)
});