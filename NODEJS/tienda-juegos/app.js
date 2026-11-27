require("dotenv").config({ quiet: true });
var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(function() {
    console.log("Base de datos conectada");
  })
  .catch(function(err) {
    console.log("Error BD: " + err.message);
  });

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/", require("./routes/web"));
app.use("/juegos", require("./routes/juegos"));
app.use("/plataformas", require("./routes/plataformas"));
app.use(require("./routes/404"));

app.listen(PORT, function() {
  console.log("Servidor en http://localhost:" + PORT);
});