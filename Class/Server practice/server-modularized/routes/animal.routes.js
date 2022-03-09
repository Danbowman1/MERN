const AnimalController = require('../controllers/animal.controller')


module.exports = (app) => {
    app.get('/api/animals', AnimalController.findAllAnimals)
    app.post('/api/animals', AnimalController.createNewAnimal)
    app.get('/api/animals/:id', AnimalController.findOneAnimal)
    app.put('/api/animals/:id', AnimalController.updateAnimal)
    app.delete('/api/animals/:id', AnimalController.deleteAnimal)

}