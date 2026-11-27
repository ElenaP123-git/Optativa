var express = require("express");
var router = express.Router();

router.use(function(req, res) {
  res.status(404).render("404", { titulo: "Página no encontrada", url: req.originalUrl });
});

module.exports = router;