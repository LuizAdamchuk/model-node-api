const express = require('express')
const routes = express.Router()

const ModelController = require('./controllers/ModelController')

routes.get('/model', ModelController.index)
routes.post('/model', ModelController.create)
routes.get('/model/:id', ModelController.show)
routes.put('/model/:id', ModelController.update)
routes.delete('/model/:id', ModelController.delete)


module.exports = routes