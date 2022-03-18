const Artist = require('./artists.model');

const getAll = async (req, res, next) => {
    try {
        const artists = await Artist.find().populate('albums');
        res.status(200).json(artists);
    } catch (error) {
        return next(error)
    }
}

const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const artist = await Artist.findById(id).populate('albums');
        res.status(200).json(artist);
    } catch (error) {
        return next(error)
    }
}

const postOne = async (req, res, next) => {
    try {
        const artist = new Artist();
        artist.name = req.body.name;
        artist.age = req.body.age;
        artist.country = req.body.country;
        const artistDB = await artist.save();
        return res.status(201).json(artistDB)
    } catch (error) {
        return next(error)
    }
}


const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const artist = new Artist(req.body);
        artist._id = id;
        const updateArtist = await Artist.findByIdAndUpdate(id, artist);
        return res.status(200).json(updateArtist);
    } catch (error) {
        return next(error);
    }
}


const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const artist = await Artist.findByIdAndDelete(id);
        return res.status(200).json(artist);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}