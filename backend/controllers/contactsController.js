const Contact = require("../models/contactModel");


const sendMessage = async(req, res) => {
    const {name, email, message} = req.body;
    try{
        const message1 = await Contact.create({name, email, message});
        res.status(200).json({mssg: "Thank you for your message"})
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    sendMessage
}