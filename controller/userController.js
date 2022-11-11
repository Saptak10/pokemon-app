const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel');

module.exports.registerUser = asyncHandler(async(req,res) => {
    const { name, email, password } = req.body

    console.log('Hello world')
    
    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please add a text field')
    }
    
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid User data')
    }

    // res.json({ message: 'Register User' })
})

module.exports.loginUser = asyncHandler(async(req,res) => {
    const { email, password } = req.body

    console.log('Hello world')

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }

    // res.status(200);
    // res.json({ message: 'Login User' })
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    })
}