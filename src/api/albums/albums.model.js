// Requerir la librería de mongoose
const mongoose = require("mongoose");
// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const albumSchema = new mongoose.Schema(
  // Type: es el tipo de dato
  // Required: si es un campo obligatorio
  // Trim: elimina los espacios al principio y final
  {
    name: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    genre: { type: String, required: true, trim: true },
    songs: [
      { type: mongoose.Schema.Types.ObjectId, ref: "songs", required: true },
    ],
  },
  // Timestamps: fecha de creación - modificación
  {
    timestamps: true,
  }
);

// Guardar en Album la referencia y el Schema
// albums- es el nombre de mi colección en la DB
const Album = mongoose.model("albums", albumSchema);
// Exportar ES5
module.exports = Album;
