const Song = require("./songs.model");
const { setError } = require("../../utils/errors/error");

const getAll = async (req, res, next) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    return next(setError(error.statusCode,'Collection Not Found'));
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id);
    res.status(200).json(song);
  } catch (error) {
    return next(setError(error.statusCode,'Item Not Found'));
  }
};

const postOne =async (req,res,next) => {
    try{ const song = new Song(); 
        song.name = req.body.name;
        song.duration = req.body.duration;
        const songDB = await song.save();
        return res.status(201).json(songDB)

    }catch (error) {
      return next(setError(error.statusCode,' Item Not Created '));
  }
}

const patchOne= async (req,res,next) => {
  try{
      const {id} =req.params;
      const song = new Song(req.body);
      song.name=req.body.name;
      song.duration=req.body.duration;
      song._id = id;
      const updateSong = await Song.findByIdAndUpdate(id, song);
        return res.status(200).json(updateSong);
  }catch (error){
    return next(setError(error.statusCode,' Item Not Modified '));
  }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const song = await Song.findByIdAndDelete(id);
        return res.status(200).json(song);
    } catch (error) {
      return next(setError(error.statusCode,' Item Not Deleted '));
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}