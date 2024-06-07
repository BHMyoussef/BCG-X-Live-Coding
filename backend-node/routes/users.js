const express = require('express')
const userController = require('../controllers/usersController')

const route = express.Router()

route.get('/:id/contents', userController.getUserContents)

module.exports.route = route