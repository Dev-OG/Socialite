const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: 3 * 24 * 60 * 60 * 1000
    })
};

module.exports.signUp = async (req, res) => {
    const {pseudo, email, password} = req.body

    try {
        const user = await UserModel.create({pseudo, email, password});
        res.status(201).json({user: user._id});
    }
    catch(err) {
        res.status(200).send({err})
    }
};

module.exports.logIn = async (req, res) => {
    const { email, password} = req.body;

    try{
        const user = await UserModel.login(email, password);
        const token = createToken(user._id)
    } catch (err){

    }
};

module.exports.logOut = async (req, res) => {

}

