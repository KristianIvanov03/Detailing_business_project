const express = require("express")
const {createTemplate, getHours} = require("../controllers/appointmentController")

//router for appointments
const router = express.Router();

router.post("/template", createTemplate);

router.get("/", getHours);

module.exports = router;