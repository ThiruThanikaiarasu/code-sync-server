require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500

const mongoose = require('mongoose')
const cors = require('cors')
const signupRouter = require('./routes/signinRoute.js')

app.use(express.json())
app.use(cors())



mongoose.connect(process.env.DB_URI)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("Connected to Database"))

app.get('/', (request, response)=> {
    response.status(200).json({message:'CodeSync'})
})

app.use('/api/v1/signup', signupRouter)

app.listen(PORT, console.log(`Server is running at http://localhost:3500/api/v1`))



