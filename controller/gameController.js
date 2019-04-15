const Video = require("../models/videogames.js");

module.exports = {
  index: (req, res) => {
    res.render("index.ejs", {
      vg: Video
    });
  }
};
