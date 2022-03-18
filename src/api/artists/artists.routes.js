const router = require("express").Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const upload = require('../../middlewares/updateFile.middleware');
const { register, login, logout } = require('../users/users.controller');

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./artists.controller");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", [isAuth], upload.single('img'),postOne);
router.patch("/:id",[isAuth],upload.single('img'), patchOne);
router.delete("/:id",[isAuth], deleteOne);

module.exports = router;
