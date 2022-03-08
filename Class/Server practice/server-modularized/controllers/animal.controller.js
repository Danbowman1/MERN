const Animal = require('../models/animal.model')

module.exports = {

    createNewAnimal: (req, res)=> {
        Animal.create(req.body)
            .then((newAnimal)=>{
                console.log(newAnimal)
                res.json(newAnimal)
            })
            .catch((err)=>console.log(err))
    }
}


