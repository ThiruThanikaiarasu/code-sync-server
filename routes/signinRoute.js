const express = require('express')
const router = express.Router()

const {addNewUser, } = require('../controller/signupController.js')


router.route('/').post(addNewUser)

module.exports = router