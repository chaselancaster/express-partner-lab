const express = require("express");
const gameRouter = express.Router();
const gameController = require("../controller/gameController.js");

gameRouter.get("/", gameController.index);
gameRouter.delete("/:id", gameController.destroy);
gameRouter.get("/:id/edit", gameController.edit);
gameRouter.put("/:id", gameController.update);

module.exports = gameRouter;
