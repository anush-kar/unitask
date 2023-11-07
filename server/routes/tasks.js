const express = require('express')

const { 
    getTasks,
    getTask,
    postTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController')

const router = express.Router()

//GET all tasks
router.get('/', getTasks)

//GET a single task
router.get('/:id', getTask)

//POST a new task
router.post('/', postTask)

//DELETE a task
router.delete('/:id', deleteTask)

//UPDATE a task
router.patch('/:id', updateTask)

module.exports = router;