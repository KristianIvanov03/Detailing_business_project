const express = require("express");
const {sendMessage} = require("../controllers/contactsController")

const router = express.Router()


router.post("/", sendMessage)


module.exports = router;