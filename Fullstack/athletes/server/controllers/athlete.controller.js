const { response } = require("express")
const Athlete = require("../models/athlete.model")

module.exports = (req, res) => {

    Athlete.find()
    .then(athletes=>{
        res.json(athletes)
    })
    .catch(err=>{
        res.status(400).json(err)
    })



}