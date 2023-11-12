const express = require('express')
const router = express.Router()
const {loginExistingUser} = require('../controller/loginController.js')

router.route('/').post(loginExistingUser)

module.exports = router