const mongoose = require('mongoose');

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
