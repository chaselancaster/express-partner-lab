const Video = require("../models/videogames.js");

module.exports = {
  index: (req, res) => {
    res.render("index.ejs", {
      vg: Video
    });
  },
  destroy: (req, res) => {
    Video.splice(req.params.id, 1);
    res.redirect("/videogames");
  }
};