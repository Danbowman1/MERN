const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


require('./config/mongoose.config')
require('./routes/jokes.routes')(app)



const port = 8000
app.listen(port, ()=> console.log(`Server has been connected to ${port}`))