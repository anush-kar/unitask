const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    
}, {timestamps: true})

module.exports = mongoose.model('taskModel', taskSchema)