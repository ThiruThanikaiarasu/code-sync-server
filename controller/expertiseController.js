const expertiseSchema = require('../models/expertiseModel.js')

const getAllExpertise = async (request, response) => {

    try{
        const expertiseData = await expertiseSchema.find()
        if(!expertiseData){
            return response.status(500).json({errorMessage : "Data not found"})
        }
        return response.status(200).json(expertiseData) 
    }
    catch(error)
    {
        response.status(500).json({errorMessage : error.message})
    }
}

module.exports = {getAllExpertise}