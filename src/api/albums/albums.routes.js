const routerAlbum = require("express").Router();

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./albums.controller");

routerAlbum.get("/", getAll);
routerAlbum.get("/:id", getOne);
routerAlbum.post("/", postOne);
routerAlbum.patch("/:id", patchOne);
routerAlbum.delete("/:id", deleteOne);

module.exports = routerAlbum;
