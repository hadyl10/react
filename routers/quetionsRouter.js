const express = require('express')


const route = express.Router()

const questionsController = require('../controllers/quetionsController')

route.get('/:poste', questionsController.getQuestionByOccupations)

module.exports = route