const express = require("express");
const router = express.Router();

const msgController = require("../controller/msgController");

router.post("/sendemail", msgController.msgPost);

module.exports = router;
