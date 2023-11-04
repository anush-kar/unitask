const express = require('express')
const task = require('../models/taskModel')
const taskModel = require('../models/taskModel')

const router = express.Router()

//GET all tasks
router.get('/', (req, res) => {
    res.json({mssg: 'GET all tasks'})
})
//GET all tasks
router.get('/', (req, res) => {
    res.json({mssg: 'GET all tasks'})
})

//GET a single task
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single task'})
})

//POST a new task
router.post('/', async (req, res) => {
    const {title, description, fee} = req.body
    try {
        const task = await taskModel.create({title, description, fee})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'POST a new task'})
})

//DELETE a task
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a task'}) 
})

//UPDATE a task
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a task'})
})

module.exports = router;