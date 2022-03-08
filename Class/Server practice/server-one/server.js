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



// name db using Mongoose

const dbName = 'animals'

mongoose.connect('mongodb://localhost/' + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(`You are connected to the ${dbName} database!`)
})
.catch((err)=>{
    console.log(`There was an error connecting to the ${dbName} database!`)
    console.log(err)
})



//  Create a model/ amd schema to shape/structure our document and connect with a specific collection in the db



// Schema to shape our document and model to interface with db logic

const AnimalSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    isFurry: {
        type: Boolean,
    },
}, {timestamps: true})

// The Model is a combination of the:
// 1. collectionName which will be a singular, capitalized version of the collection name that's held in the db
// 2. The Schema

const Animal = mongoose.model('Animal', AnimalSchema)
//  Mongoose model provides an interface to the database for creating, querying, deleting records, etc.


// Our Logic

app.post('/api/animals', (req, res)=> {
    Animal.create(req.body)
        .then((newAnimal)=>{
            console.log(newAnimal)
            res.json(newAnimal)
        })
        .catch((err)=>console.log(err))
})

app.get('/api/animals', (req, res)=>{
    // use the model to connect to the collection and find/return all documents
    Animal.find() //find all documents. don't filter anything out
        .then((allAnimals)=>{
            console.log(allAnimals)
            res.json(allAnimals)
        })
        .catch((err)=>console.log(err))
})

app.get('/api/animals/:id', (req, res)=> {
    Animal.findOne({_id: req.params.id})
        .then((oneAnimal)=>{
            console.log(oneAnimal)
            res.json(oneAnimal)
        })
        .catch((err)=>console.log(err))
})

app.delete('/api/animals/:id', (req, res)=> {
    Animal.deleteOne({_id: req.params.id})
        .then((deletedAnimal)=>{
            console.log(deletedAnimal)
            res.json(deletedAnimal)
        })
        .catch((err)=>console.log(err))
})

// need the req.body
app.put('/api/animals/:id', (req, res)=>{
    Animal.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then((updatedAnimal)=>{
        console.log(updatedAnimal)
        res.json(updatedAnimal)
        .catch((err)=>console.log(err))
    })
})


const port = 8000
// Running server
app.listen(port, ()=> console.log(`Server connected on port ${port}`))