const express = require("express");
const http = require("http");
const cors = require("cors");
const multer = require("multer");

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
  res.send(`<script>window.location.href=document.referrer</script>`);  
});

const produtosRoutes = require("./src/api/routes/produtosRoutes");
const clientsRoutes = require("./src/api/routes/clientsRoutes");
const { patch } = require("./src/api/routes/produtosRoutes");
const path = require("path");
const router = require("./src/api/routes/produtosRoutes");
const Produtos = require("./src/api/models/produtosModels.js");
const { indexOne } = require("./src/api/controllers/produtosControllers.js");

app.use(produtosRoutes);
app.use(clientsRoutes);

app.use(cors());

app.set("url", "http://localhost:");
app.set("porta", 3000);


app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

http.createServer(app).listen(app.get("porta"), function () {
  console.log(
    "Servidor rodando na porta: " + app.get("url") + app.get("porta")
  );
});

module.exports = app;
