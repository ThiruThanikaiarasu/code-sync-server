const express = require('express')
const app = express()
const PORT = 3500

app.get('/api/v1', (request, response)=> {
    response.send('CodeSync')
})

app.listen(PORT, console.log(`Server is running at http://localhost:3500/api/v1`))