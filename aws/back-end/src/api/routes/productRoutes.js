const express = require("express");
const router = express.Router();

const produtosControllers = require("../controllers/productControllers");

router.get("/produtos", produtosControllers.indexAll);

router.post("/produtos/:client_id", produtosControllers.store);

router.get("/produtos/:client_id", produtosControllers.index);

router.put("/produtos/:produtos_id", produtosControllers.update);

router.delete("/produtos/:produtos_id", produtosControllers.delete);

module.exports = router;
