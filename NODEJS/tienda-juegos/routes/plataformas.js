var express = require("express");
var router = express.Router();
var Juego = require("../models/juego");

router.get("/", async function(req, res) {
  var plataformas = await Juego.distinct("plataforma");
  res.render("plataformas", { titulo: "Plataformas", plataformas: plataformas });
});

router.get("/:nombre", async function(req, res) {
  var plataforma = req.params.nombre;
  var juegos = await Juego.find({ plataforma: plataforma }).sort({ titulo: 1 });
  res.render("plataformas", {
    titulo: "Plataforma: " + plataforma,
    plataformas: [],
    juegos: juegos
  });
});

module.exports = router;