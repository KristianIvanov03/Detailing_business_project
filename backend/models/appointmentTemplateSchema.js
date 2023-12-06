const mongoose = require('mongoose');


//MongoDb model for days. Here we can see which hours in which days are free
const appointmentTemplateSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true
  },
  timeSlots: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('AppointmentTemplate', appointmentTemplateSchema);
