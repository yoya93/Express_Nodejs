const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" });
});

app.get("/servicios", (req, res) => {
  res.render("servicios", { titulo: "servicios EJS" });
});

app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Página 404" });
});
