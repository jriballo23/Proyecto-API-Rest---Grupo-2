// Requerir la librería de mongoose
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema(
 
    {
        name: { type: String, required: true, trim: true },
        duration: { type: String, required: true, trim: true }
    },
    
    {
        timestamps: true
    }
);


const Song = mongoose.model('songs', songSchema);

module.exports = Song;