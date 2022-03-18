const routerAlbum = require("express").Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const upload = require('../../middlewares/updateFile.middleware');
const { register, login, logout } = require('../users/users.controller');

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./albums.controller");

routerAlbum.get("/", getAll);
routerAlbum.get("/:id", getOne);
routerAlbum.post("/",[isAuth], postOne);
routerAlbum.patch("/:id",[isAuth],upload.single('img'), patchOne);
routerAlbum.delete("/:id",[isAuth],upload.single('img'), deleteOne);

module.exports = routerAlbum;
