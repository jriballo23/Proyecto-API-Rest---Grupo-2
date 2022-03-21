
const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(

  {
    name: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    genre: { type: String, required: true, trim: true },
    songs: [
      { type: mongoose.Schema.Types.ObjectId, ref: "songs" , require:false},
    ],
    img: { type: String, trim: true, required: false }
  },
 
  {
    timestamps: true,
  }
);

const Album = mongoose.model("albums", albumSchema);

module.exports = Album;
