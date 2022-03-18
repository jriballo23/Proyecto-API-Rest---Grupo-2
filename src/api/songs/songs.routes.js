const routerSong = require("express").Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const { register, login, logout } = require('../users/users.controller');

const {
  getAll,
  getOne,
  postOne,
  patchOne,
} = require("./songs.controller");

routerSong.get("/", getAll);
routerSong.get("/:id", getOne);
routerSong.post("/",[isAuth], postOne);
routerSong.patch("/:id",[isAuth], patchOne);

module.exports = routerSong;
