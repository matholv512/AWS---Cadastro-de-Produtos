const express = require("express");
const http = require("http");
const cors = require("cors");
const multer = require("multer");
let empresaNome = "ADIDAS";

const app = express();
app.use(express.json());
require("./src/database/indexDb.js");
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, uploadFile, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, uploadFile, callback) {
    callback(
      null,
      empresaNome +
        "-" +
        uploadFile.originalname +
        "-" +
        Date.now() +
        path.extname(uploadFile.originalname)
    );
  },
});

const upload = multer({ storage });

app.post("/upload", upload.array("uploadFile"), (req, res) => {
  res.send(
    `<script>window.location.href= "../front-end/src/components/form/form.js"</script>`
  );
  // res.send(`<h1>Produto enviado com SUCESSO!!!<h1/>` + `<br/>` + `<h2>Cadastrar novo produto: <h2/>` + `<button type="submit" >Novo<button/>` )
  // res.send("Produto enviado com sucesso!!!" + `<br/>` + "Cadastrar um novo produto " + `<br/>` + `<button>Novo<button/>`)
});

const produtosRoutes = require("./src/api/routes/produtosRoutes");
const { patch } = require("./src/api/routes/produtosRoutes");
const path = require("path");

app.use(produtosRoutes);

app.use(cors());

app.set("url", "http://localhost:");
app.set("porta", 3000);

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Methods", "GET, POST");
  app.use(cors());
  next();
});

http.createServer(app).listen(app.get("porta"), function () {
  console.log(
    "Servidor rodando na porta: " + app.get("url") + app.get("porta")
  );
});

module.exports = app;
