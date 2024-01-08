const express = require("express");
const { getGenericMessage } = require("../controllers/GenericController");

const router = express.Router();

router.get("/teste-deploy", getGenericMessage);

module.exports = router;
