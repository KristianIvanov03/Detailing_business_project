const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"});
}

const loginUser = async (req,res) => {
    const {email, password} = req.body;

    try{
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.status(200).json({firstName: user.firstName, lastName: user.lastName, email: user.email, phone: user.phone, token})
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

const signupUser = async (req, res) => {
    const {firstName, lastName, email, password, phone} = req.body;

    try{
        const user = await User.signup(firstName, lastName, email, password, phone);

        const token = createToken(user._id);
        res.status(200).json({firstName, lastName, email, phone, token});
    } catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {loginUser, signupUser};