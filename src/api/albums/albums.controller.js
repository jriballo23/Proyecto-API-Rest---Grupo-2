const Album = require("./albums.model");
const { setError } = require("../../utils/errors/error");
const {
  deleteImgCloudinary,
} = require("../../middlewares/deleteFile.middleware");

const getAll = async (req, res, next) => {
  try {
    const albums = await Album.find().populate("songs");
    res.status(200).json(albums);
  } catch (error) {
    return next(setError(error.statusCode,'Collection Not Found'));
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const album = await Album.findById(id).populate("songs");
    res.status(200).json(album);
  } catch (error) {
    return next(setError(error.statusCode,'Item Not Found'));
  }
};

const postOne = async (req, res, next) => {
  try {
    const album = new Album();
    album.name = req.body.name;
    album.date = req.body.date;
    album.genre = req.body.genre;
    album.songs = req.body.songs;
    if (req.file) album.img = req.file.path;
    const albumDB = await album.save();
    return res.status(201).json(albumDB);
  } catch (error) {
    return next(setError(error.statusCode,' Item Not Created '));
  }
};

const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const album = new Album(req.body);
    album._id = id;
    if (req.file) album.img = req.file.path;
    const updateAlbum = await Album.findByIdAndUpdate(id, album);
    return res.status(200).json(updateAlbum);
  } catch (error) {
    return next(setError(error.statusCode,' Item Not Modified '));
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const album = await Album.findByIdAndDelete(id);
    if (album.img) deleteImgCloudinary(album.img);
    return res.status(200).json(album);
  } catch (error) {
    return next(setError(error.statusCode,' Item Not Deleted '));
  }
};

module.exports = {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
};
