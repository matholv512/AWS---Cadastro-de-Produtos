const express = require("express");
const router = express.Router();

const clientsControllers = require("../controllers/clientsControllers");

router.get("/clients", clientsControllers.indexAll);

module.exports = router;