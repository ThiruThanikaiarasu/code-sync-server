const express = require('express')
const router = express.Router()

const {addNewUser, loginExistingUser} = require('../controller/signinController')

router.route('/login').post(loginExistingUser)
router.route('/signup').post(addNewUser)

module.exports = router