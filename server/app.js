require('dotenv').config()

const express = require('express')
const mongoose =  require('mongoose')
const cors = require('cors')
const taskRoutes = require('./routes/tasks')
const userRoutes = require('./routes/users')
const app = express()

app.use(express.json())

// app.use(require('./routes/users'))
//middleware
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/tasks', taskRoutes)
app.use('/api/users', userRoutes)

// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome to Unitask'});
// })

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

