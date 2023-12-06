const mongoose = require("mongoose");
const AppointmentTemplate = require("../models/appointmentTemplateSchema");

//function for creating a template day. 
const createTemplate = async (req, res) => {
    const {day, timeSlots} = req.body

    try{
        const dayA = await AppointmentTemplate.create({day, timeSlots})
        res.status(200).json({mssg: dayA})
    }catch(error){
        res.status(400).json({error: error.message});
    }
}


//function for retrieveing the template
const getHours = async (req, res) => {
    const hours = await AppointmentTemplate.find({});
    res.status(200).json(hours);
}

module.exports = {
    createTemplate,
    getHours
}