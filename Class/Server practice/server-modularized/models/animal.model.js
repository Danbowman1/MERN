const mongoose = require('mongoose')

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

module.exports = Animal