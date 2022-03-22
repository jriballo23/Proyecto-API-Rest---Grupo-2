const Artist = require("./artists.model");
const { setError } = require("../../utils/errors/error");

const {
  deleteImgCloudinary,
} = require("../../middlewares/deleteFile.middleware");

const getAll = async (req, res, next) => {
  try {
    const artists = await Artist.find().populate("albums");
    res.status(200).json(artists);
  } catch (error) {
    return next(setError(error.statusCode, "Collection Not Found"));
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findById(id).populate("albums");
    res.status(200).json(artist);
  } catch (error) {
    return next(setError(error.statusCode, "Item Not Found"));
  }
};

const postOne = async (req, res, next) => {
  try {
    const artist = new Artist();
    artist.name = req.body.name;
    artist.age = req.body.age;
    artist.country = req.body.country;
    artist.albums = req.body.albums;
    if (req.file) artist.img = req.file.path;
    const artistDB = await artist.save();
    return res.status(201).json(artistDB);
  } catch (error) {
    return next(setError(error.statusCode, " Item Not Created "));
  }
};

const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artist = new Artist(req.body);
    artist._id = id;
    if (req.file) artist.img = req.file.path;
    const updateArtist = await Artist.findByIdAndUpdate(id, artist);
    return res.status(200).json(updateArtist);
  } catch (error) {
    return next(setError(error.statusCode, " Item Not Modified "));
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByIdAndDelete(id);
    if (artist.img) deleteImgCloudinary(artist.img);
    return res.status(200).json(artist);
  } catch (error) {
    return next(setError(error.statusCode, " Item Not Deleted "));
  }
};

module.exports = {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
};
