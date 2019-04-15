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
  },
  edit: (req, res) => {
    res.render("edit.ejs", {
      vg: Video[req.params.id],
      id: req.params.id
    });
  },
  update: (req, res) => {
    Video[req.params.id] = req.body;
    res.redirect("/videogames");
  }
};
