const express = require("express");
const router = express.Router();
const {getHours} = require("../controllers/appointmentController")

router.get('/', getHours);
module.exports = router;