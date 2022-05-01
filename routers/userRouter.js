const express = require('express')

const route = express.Router()
const userController = require('../controllers/userController')
route.post('/', userController.register)


module.exports = route