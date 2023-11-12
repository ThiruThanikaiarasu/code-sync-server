const mongoose = require('mongoose')

const expertiseSchema = new mongoose.Schema(
    {
        customId : {
            type : Number,
            required : true,
        },

        title : {
            type : String, 
            required : true,
        },
    },
    {
        collection : 'expertise'
    }
)

module.exports = mongoose.model('expertise', expertiseSchema)