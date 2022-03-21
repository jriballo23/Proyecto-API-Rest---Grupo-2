
const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: false, trim: true },
    country: { type: String, required: true, trim: true },
    albums: [
      { type: mongoose.Schema.Types.ObjectId, ref: "albums",required: false },
    ],
    img: { type: String, trim: true, required: false }
  },
  
  {
    timestamps: true,
  }
);


const Artist = mongoose.model("artists", artistSchema);

module.exports = Artist;
