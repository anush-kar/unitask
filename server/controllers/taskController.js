const Task = require("../models/taskModel")
const mongoose = require('mongoose')

//GET all tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({createdAt: -1})

    res.status(200).json(tasks)
}

//GET a single task
const getTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findById(id)

    if(!task) {
        return res.status(404).json({error: 'No such task'})
    }

    res.status(200).json(task)
}

//POST a new task
const postTask = async(req, res) => {
    const {title, description, fee} = req.body
    
    //add doc to db
    try {
        const task = await Task.create({title, description, fee})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // res.json({mssg: 'POST a new task'})
}

// delete a workout
const deleteTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findOneAndDelete({_id: id})

    if(!task) {
        return res.status(404).json({error: 'No such task'})
    }    

    res.status(200).json(task)

    // res.json({mssg: 'DELETE a task'})
}

// update a workout
const updateTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findOneAndUpdate({_id : id}, {
        ...req.body
    })

    if(!task) {
        return res.status(404).json({error: 'No such task'})
    }

    res.status(200).json(task)
    // res.json({mssg: 'UPDATE a task'})
}

module.exports = {
    postTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}