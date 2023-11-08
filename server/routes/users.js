const express = require('express')
const User = require("../models/userModel")

const { 
    getUser,
    getUsers,
    newUser,
    loginUser
} = require('../controllers/userController')

const router = express.Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/register', newUser)

router.post('/login', loginUser)

module.exports = router;