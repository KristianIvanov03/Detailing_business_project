const mongoose = require("mongoose");
const AppointmentTemplate = require("../models/appointmentTemplateSchema");
const UserAppointment = require("../models/userAppointmentHour");

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

const getHoursForUser = async (req, res) => {
    const {user_id} = req.body;
    const appointment = await UserAppointment.find({user_id})
    res.status(400).json({appointment});
}

const createAppointment = async (req, res) => {
    const {day, hour, user_id} = req.body;

    let emptyFields = [];
    if(!day){
        emptyFields.push("day")
    }
    if(!hour){
        emptyFields.push("hour")
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all the fields", emptyFields});
    }
    const searchIfFree = await AppointmentTemplate.find({day});
    //checks to see if there is an available slot on that day
    if(!searchIfFree[0].timeSlots.includes(hour)){
        return res.status(400).json({error: "This hour is already appointed"});;
    }
    try {
        const hours = searchIfFree[0].timeSlots;
        const filteredArray = hours.filter(item => item !== hour);
        const reworkedTemplate = await AppointmentTemplate.findOneAndUpdate({day},{$set: {timeSlots: filteredArray}})
        const appointedHour = await UserAppointment.create({user_id, day, hour})
        
        res.status(200).json(appointedHour);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

const deleteAppointment = async (req,res) => {
    const {_id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error: "No such appointed hour"})
    }
    const appointedHour = await UserAppointment.findOneAndDelete({_id});
    if (!appointedHour) {
        return res.status(404).json({error: "No such appointed hour"});
    }
    const dayOfWeek = await AppointmentTemplate.find({day: appointedHour.day});
    const array = dayOfWeek[0].timeSlots;
    array.push(appointedHour.hour);
    const reworkedTemplate = await AppointmentTemplate.findOneAndUpdate({day: appointedHour.day},{$set: {timeSlots: array}})
    res.status(200).json({mssg: "Sucessfully deleted"});

}

module.exports = {
    createTemplate,
    getHours,
    getHoursForUser,
    createAppointment,
    deleteAppointment
}