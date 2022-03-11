const GameController = require("../controllers/game.controller")

module.exports = (app) => {

    app.post('/api/games', GameController.createNewGame)
    app.get('/api/games', GameController.findAllGames)
    app.get('/api/games/:id', GameController.findOneGame)
    app.delete('/api/games/:id', GameController.deleteGame)
    app.put('/api/games/:id', GameController.updateGame)
}