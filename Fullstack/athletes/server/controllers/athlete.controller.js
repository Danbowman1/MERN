const { response } = require("express")
const Athlete = require("../models/athlete.model")

module.exports = {

    findAllAthletes: (req, res) => {
        Athlete.find()
            .then(athletes=>{
                res.json(athletes)
            })
            .catch(err=>{
                res.status(400).json(err)
            })
    },
    
    createNewAthlete: (req, res) =>{
        Athlete.create(req.body)
            .then(newAthlete=>{
                console.log(newAthlete)
                res.json(newAthlete)
            })
            .catch(err=>{
                console.log("Something went wrong in createNewAthlete")
                res.status(400).json(err)
            })
    },

    findOneAthlete: (req, res) =>{
        Athlete.findOne({_id: req.params.id})
            .then(oneAthlete=>{
                console.log(oneAthlete)
                res.json(oneAthlete)
            })
            .catch(err=>{
                console.log("fineOneAthlete has failed!")
                res.json({message:"Something went wrong in fineOneAthlete", error: err})
            })
    },

    deleteOneAthlete: (req, res)=>{
        Athlete.deleteOne({_id: req.params.id})
            .then(deleteOneAthlete=>{
                res.json(deleteOneAthlete)
            })
            .catch(err=>{
                console.log("deleteOneAthlete has failed!")
                res.json({message:"Something went wrong in deleteOneAthlete", error: err})
            })
    },

    updateAthlete: (req, res) =>{
        Athlete.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedAthlete=>{
                console.log(updatedAthlete)
                res.json(updatedAthlete)
            })
            .catch(err=>{
                console.log("Something went wrong in updateAthlete")
                res.status(400).json(err)
            })
            
    },
    

}
