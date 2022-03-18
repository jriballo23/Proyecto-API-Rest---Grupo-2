// Requerir la librería de mongoose
const mongoose = require('mongoose');
// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const songSchema = new mongoose.Schema(
    // Type: es el tipo de dato
    // Required: si es un campo obligatorio
    // Trim: elimina los espacios al principio y final
    {
        name: { type: String, required: true, trim: true },
        duration: { type: String, required: true, trim: true }
    },
    // Timestamps: fecha de creación - modificación
    {
        timestamps: true
    }
);

// Guardar en Song la referencia y el Schema
// songs- es el nombre de mi colección en la DB
const Song = mongoose.model('songs', songSchema);
// Exportar ES5
module.exports = Song;