var mongoose = require("mongoose");

var juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  plataforma: { type: String, required: true },
  precio: { type: Number, required: true }
});

var Juego = mongoose.model("Juego", juegoSchema, "juegos");

module.exports = Juego;