var express = require("express");
var router = express.Router();
var Juego = require("../models/juego");

router.get("/", async function(req, res) {
  var juegos = await Juego.find().sort({ titulo: 1 });
  res.render("juegos", { titulo: "Juegos", juegos: juegos });
});

router.get("/baratos", async function(req, res) {
  var juegos = await Juego.find({ precio: { $lt: 30 } }).sort({ precio: 1 });
  res.render("juegos", { titulo: "Juegos", juegos: juegos });
});

module.exports = router;