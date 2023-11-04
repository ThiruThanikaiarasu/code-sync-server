const {v4 : uuidv4} = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const users = require('../models/signinModel')

const addNewUser = async (request, response) => {
    const {email, password} = request.body
    console.log(password, email)
    const generatedUserId = uuidv4()
    console.log(generatedUserId)
    const hashedPassword = await bcrypt.hash(password,10)
    console.log(hashedPassword)

    try{
        const existingUser = await users.findOne({email})

        if(existingUser){
            return response.status(409).json({errorMessage : "User Already Exist, try to Login."})
        }

        const newUserData = {
            user_id : generatedUserId,
            email : email,
            password : hashedPassword
        }

        const addedUser = await newUserData.save()

        const token = jwt.sign(
                addedUser,
                email,
                {expiresIn : 60*24}
            )
        console.log(token)

        return response.status(201).json({token, user_id})
    }
    catch(error){
        return response.status(500).json({ errorMessage : error.message})
    }
}

const loginExistingUser = () => {

}

module.exports = {
    addNewUser,
    loginExistingUser
}