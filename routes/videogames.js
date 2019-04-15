const express = require("express");
const gameRouter = express.Router();
const gameController = require("../controller/gameController.js");

gameRouter.get("/", gameController.index);

module.exports = gameRouter;
