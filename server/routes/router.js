const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller') 
route.get('/update-user',services.updateRouter)
route.get('/add-user', services.addRouter)
route.get('/', services.homeRouter)

// API

route.post('/api/user', controller.create)
route.post('/api/user', controller.find)
route.post('/api/user/:id', controller.update)
route.post('/api/user/:id', controller.delete)
module.exports = route 