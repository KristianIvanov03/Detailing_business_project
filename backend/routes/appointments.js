const express = require("express")
const router = express.Router();

const {createTemplate, getHours} = require("../controllers/appointmentController")

router.post("/template", createTemplate);

router.get("/", getHours);

module.exports = router;