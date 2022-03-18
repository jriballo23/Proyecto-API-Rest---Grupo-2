const router = require("express").Router();

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./artists.controller");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", postOne);
router.patch("/:id", patchOne);
router.delete("/:id", deleteOne);

module.exports = router;
