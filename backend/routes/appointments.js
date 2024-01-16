const express = require("express")
const {createTemplate, getHours, getHoursForUser, createAppointment, deleteAppointment} = require("../controllers/appointmentController")
const requireAuth = require('../middleware/requireAuth')
//router for appointments
const router = express.Router();
router.use(requireAuth)
router.post("/template", createTemplate);

router.get("/", getHours);

router.get("/userAppointment", getHoursForUser);

router.post("/", createAppointment)

router.delete("/:_id", deleteAppointment)

module.exports = router;