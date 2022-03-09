const Animal = require('../models/animal.model')

module.exports = {

    createNewAnimal: (req, res)=> {
        Animal.create(req.body)
            .then((newAnimal)=>{
                console.log(newAnimal)
                res.json(newAnimal)
            })
            .catch((err)=>console.log(err))
    },

    findAllAnimals: (req, res)=>{
        Animal.find({}) 
            .then((allAnimals)=>{
                console.log(allAnimals)
                res.json(allAnimals)
            })
            .catch((err)=>console.log(err))
    },
    
    findOneAnimal: (req, res)=>{
        Animal.findOne({_id: req.params.id})
            .then((oneAnimal)=>{
                console.log(oneAnimal)
                res.json(oneAnimal)
            })
            .catch((err)=>console.log(err))
    },

    deleteAnimal: (req, res)=> {
        Animal.deleteOne({_id: req.params.id})
            .then((deletedAnimal)=>{
                console.log(deletedAnimal)
                res.json(deletedAnimal)
            })
            .catch((err)=>console.log(err))
    },

    updateAnimal: (req, res)=>{
        Animal.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedAnimal)=>{
            console.log(updatedAnimal)
            res.json(updatedAnimal)
        })
        .catch((err)=>console.log(err))
    }
}


