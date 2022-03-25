const AthleteController = require("../controllers/athlete.controller")

module.exports = (app) => {
    app.get('/api/athletes', AthleteController)
}