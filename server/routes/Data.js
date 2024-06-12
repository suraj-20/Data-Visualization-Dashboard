const express = require("express");
const { getData } = require("../controller/Data");

const router = express.Router();

router.get("/data", getData);

module.exports = router;
