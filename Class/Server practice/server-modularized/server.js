// dependencies and set express method to a var
const express = require('express')
const mongoose = require('mongoose')
const app = express()


// BOTH ARE NEEDED FOR POST AND PUT CALLS (where we SENS info in the request)
// This parses incoming request with JSON payloads. Allows us to recognize Request Object as a JSON Object
// Without, we would get TypeErrors on out "post" calls https://geeksforgeeks.org/express-js-express-json-function/
app.use(express.json())
// This parses incoming requests with STRING OR ARRAYS payloads. Allows us to recognize Request Object as a string or array
app.use(express.urlencoded({ extended: true}))



require('./config/mongoose.config')
require('./routes/animal.routes')(app)





const port = 8000
// Running server
app.listen(port, ()=> console.log(`Server connected on port ${port}`))