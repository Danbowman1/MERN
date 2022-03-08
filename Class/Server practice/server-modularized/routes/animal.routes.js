const AnimalController = require('../controllers/animal.controller')


module.exports = (app) => {
    app.post('/api/animals', AnimalController.createNewAnimal)
}