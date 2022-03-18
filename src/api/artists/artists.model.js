// Requerir la librería de mongoose
const mongoose = require("mongoose");
// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const artistSchema = new mongoose.Schema(
  // Type: es el tipo de dato
  // Required: si es un campo obligatorio
  // Trim: elimina los espacios al principio y final
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: false, trim: true },
    country: { type: String, required: true, trim: true },
    albums: [
      { type: mongoose.Schema.Types.ObjectId, ref: "albums", required: false },
    ],
  },
  // Timestamps: fecha de creación - modificación
  {
    timestamps: true,
  }
);

// Guardar en Artist la referencia y el Schema
// artists- es el nombre de mi colección en la DB
const Artist = mongoose.model("artists", artistSchema);
// Exportar ES5
module.exports = Artist;
