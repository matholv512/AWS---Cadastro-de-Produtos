const express = require("express");
const router = express.Router();

const clientsControllers = require("../controllers/clientsControllers");

router.get("/clients", clientsControllers.indexAll);

router.get("/clients/:client_id", clientsControllers.index);


module.exports = router;
