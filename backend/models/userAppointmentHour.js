const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAppointmentSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("userAppointment", userAppointmentSchema);