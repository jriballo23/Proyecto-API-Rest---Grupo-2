const Song = require("./songs.model");

const getAll = async (req, res, next) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    return next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id);
    res.status(200).json(song);
  } catch (error) {
    return next(error);
  }
};

const postOne =async (req,res,next) => {
    try{ const song = new Song(); 
        song.name = req.body.name;
        song.duration = req.body.duration;
        const songDB = await song.save();
        return res.status(201).json(songDB)

    }catch (error) {
    return next(error);
  }
}

// Falta el patchOne //////////////////////////////////////

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const song = await Song.findByIdAndDelete(id);
        return res.status(200).json(song);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    deleteOne
}