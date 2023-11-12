const userModel = require('../models/userModel.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginExistingUser = async (request, response) => {
    const {email, password} = request.body
    
    const validUser = await userModel.findOne({email})
    if(!validUser){
        return response.status(400).json({errorMessage : "Invalid email"})
    }

    if(bcrypt.compare(password, validUser.password)){

        const token = jwt.sign(
            {email : validUser.email},
            process.env.JWT_KEY
        )

        return response.status(201).json({token : token})
    }
}

module.exports = {loginExistingUser}