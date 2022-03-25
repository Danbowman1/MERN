const mongoose = require("mongoose")

const AthleteSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "A players name is required!"],
        minlength: [ 2, "The players name must be at least 2 characters long!"]
    },

    lastName: {
        type: String,
        required: [true, "A players name is required!"],
        minlength: [ 2, "The players name must be at least 2 characters long!"]
    },

    sport: {
        type: String,
    },

    team: {
        type: String,
    }


}, {timestamps: true})

const Athlete = mongoose.model("Athlete", AthleteSchema)

module.exports = Athlete