const routerSong = require("express").Router();

const {
  getAll,
  getOne,
  postOne,
} = require("./songs.controller");

routerSong.get("/", getAll);
routerSong.get("/:id", getOne);
routerSong.post("/", postOne);


module.exports = routerSong;
