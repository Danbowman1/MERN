const mongoose = require('mongoose')


const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "A movie's title is required!!!"],
        maxlength: [30, "The titles length can be no more then 30 characters"],
    },

    genre: {
        type: String,
        required: [true, "A movie's genre is required!!!"],
        enum: [
            "Crime Noir",
            "French Cinema",
            "Romcom",
            "Horror",
            "Sci-Fi",
            "Silent Movie",
            "Documentary",
            "Comedy",
            "Action",
            "Thriller",
            "Family",
            "Animated",
            "Drama"
        ]
    },

    boxArt: {
        type: String,
        required: [true, "Because we love pictures!!"]
    },

    watchLength: {
        type: Number
    },

    rating: {
        type: String,
        enum: [
            "G",
            "PG",
            "PG-13",
            "R",
            "NC-17"
        ]
    },

    actors: {
        type: String,
    },

    kidFriendly: {
        type: Boolean,
        required: [true, "Need to know if it's good for kids!!!"]
    },

    yearReleased: {
        type: Number,
        min: [1920, "Nothing to old - they creep me out!"]
    },



}, {timestamps: true}) 

const Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie