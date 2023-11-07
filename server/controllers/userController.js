const User = require("../models/userModel")
const mongoose = require('mongoose')

const newUser = async (req, res) => {
    const {name, email, username, password, cpassword} = req.body
    
    if (!name || !email || !username || !password || !cpassword) {
        return res.status(422).json({error: "Please fill all the fields properly"})
    }
    //add doc to db
    try {
        const emailExist = await User.findOne({email: email})
        if (emailExist) {
            return res.status(422).json({error: "Email already exists"})
        }
        const usernameExist = await User.findOne({username: username})
        if (usernameExist) {
            return res.status(422).json({error: "Username already exists"})
        }
        if (password != cpassword){
            return res.status(422).json({error: "passwords do not match"})
        }

        const user = new User({name, email, username, password, cpassword})

        const userRegister = await user.save()

        console.log('${user} user registered successfully')
        console.log(userRegister)

        if (userRegister){
            res.status(200).json({message: "user registered successfully"})
        } else {
            res.status(500).json({error: "failed to register"})
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // res.json({mssg: 'POST a new user'})
}

const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findById(id)

    if(!user) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

//login route
const loginUser = async (req,res) => {
    // console.log(req.body)
    // res.status(200).json({message: "noice"})
    try{
        const {username, password} = req.body

        if (!username || !password) {
            return res.status(400).json({error: "Please fill the data" })
        }
        
        const userLogin = await User.findOne({username: username})

        console.log(userLogin)

        if(!userLogin){
            res.status(400).json({error: "user error"})
        }
        res.json({message: "user logged in successfully"})
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    newUser,
    getUsers,
    getUser,
    loginUser
}