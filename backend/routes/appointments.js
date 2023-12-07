const express = require("express")
const {createTemplate, getHours, getHoursForUser, createAppointment, deleteAppointment} = require("../controllers/appointmentController")

//router for appointments
const router = express.Router();

router.post("/template", createTemplate);

router.get("/", getHours);

router.get("/userAppointment", getHoursForUser);

router.post("/", createAppointment)

router.delete("/:_id", deleteAppointment)

module.exports = router;