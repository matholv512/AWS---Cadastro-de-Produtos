const express = require("express");
const http = require("http");
const cors = require("cors");
const multer = require("multer");

const produtosRoutes = require("./src/api/routes/productRoutes");
const clientsRoutes = require("./src/api/routes/clientsRoutes");
const { patch } = require("./src/api/routes/productRoutes");
const path = require("path");
const router = require("./src/api/routes/productRoutes");
const Produtos = require("./src/api/models/productModels.js");
const { indexOne } = require("./src/api/controllers/productControllers.js");

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
  res.redirect(301, "http://localhost:3001/");
});

app.use(produtosRoutes);
app.use(clientsRoutes);

app.use(cors());

app.set("url", "http://localhost:");
app.set("porta", 3000);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
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
