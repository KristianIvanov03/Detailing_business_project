const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//MongoDb model saved hours by users
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