const express = require('express')
const router = express.Router()
const {getAllExpertise} = require('../controller/expertiseController.js')

router.route('/').get(getAllExpertise)

module.exports = router