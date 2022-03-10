const mongoose = require('mongoose')

const movieDB = 'movieDB'

mongoose.connect(`mongodb://localhost/${movieDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the database: ${movieDB}`)
    })
    .catch((err)=>{
        console.log(`You had a prob connecting to ${movieDB}`)
        console.log(err)
    })