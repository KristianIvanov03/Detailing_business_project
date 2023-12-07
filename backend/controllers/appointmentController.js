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

//function for appoining hour
const createAppointment = async (req, res) => {
    const {day, hour, user_id} = req.body;


    //checking if all of the input fields are not empty
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
    //retrieving the day for the appointment
    const searchIfFree = await AppointmentTemplate.find({day});
    //checks to see if there is an available slot on that day
    if(!searchIfFree[0].timeSlots.includes(hour)){
        return res.status(400).json({error: "This hour is already appointed"});;
    }
    try {
        //retrieving the timeslots for that day
        const hours = searchIfFree[0].timeSlots;
        //removing the new appointed hour from the template
        const filteredArray = hours.filter(item => item !== hour);
        //updating the template 
        const reworkedTemplate = await AppointmentTemplate.findOneAndUpdate({day},{$set: {timeSlots: filteredArray}})
        //creating and saving the appointed hour
        const appointedHour = await UserAppointment.create({user_id, day, hour})
        
        res.status(200).json(appointedHour);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

//function for canceling appointed hour
const deleteAppointment = async (req,res) => {
    //retrieving id of appointment
    const {_id} = req.params;
    //checks if id is correct
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error: "Inaccurate id"})
    }
    //checks if there is an appointed hour if there is one, then it is deleted
    const appointedHour = await UserAppointment.findOneAndDelete({_id});
    if (!appointedHour) {
        return res.status(404).json({error: "No such appointed hour"});
    }
    //adding back the timeSlot which was removed when the appointment was created
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