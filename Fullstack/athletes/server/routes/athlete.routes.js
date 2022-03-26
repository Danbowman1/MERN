const AthleteController = require("../controllers/athlete.controller")

module.exports = (app) => {
    app.get('/api/athletes', AthleteController.findAllAthletes)
    app.post('/api/athletes', AthleteController.createNewAthlete)
    app.get('/api/athletes/:id', AthleteController.findOneAthlete)
    app.delete('/api/athletes/:id', AthleteController.deleteOneAthlete)
    app.put('/api/athletes/:id', AthleteController.updateAthlete)
    
    
}