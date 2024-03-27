const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();

require('dotenv').config();

userRouter.post('/register', async (req, res) => {

    const { name, email, password } = req.body;

    try {

        if (!name && !email && !password) {
            return res.status(400).send({ message: 'Please fill all fields!' })
        }

        if (!name) {
            return res.status(400).send({ message: 'Please fill name field!' })
        }

        if (!email) {
            return res.status(400).send({ message: 'Please fill email field!' })
        }

        if (!password) {
            return res.status(400).send({ message: 'Please fill password field!' })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({ message: 'Please enter a valid email address!' });
        }

        const isUserExist = await userModel.findOne({ email });

        if (isUserExist) {
            return res.status(422).send({ message: "User already exists!" })
        }

        const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[a-zA-Z]).{8,}$/;

        if (!passRegex.test(password)) {
            return res.status(400).send({ message: "Password must be at least 8 characters long, include uppercase and lowercase letters, digits, and a special character." })
        }

        const hashedPass = await bcrypt.hash(password, 5);

        const newUser = await userModel.create({
            ...req.body,
            password: hashedPass
        });

        res.status(201).send({ message: 'Registration successful!', newUser });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error.', error });
    }
    console.log(req.body);
});

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email && !password) {
            return res.status(400).send({ message: 'Please fill all fields!' })
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).send({ message: 'User not found! Please register your self.' });
        }

        const verifyPassword = await bcrypt.compare(password, user.password);

        if (user && verifyPassword) {
            const id = user._id;
            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: '5d'
            });

            return res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token
            });
        } else {
            return res.status(401).send({ message: "Wrong password!" })
        }
    } catch (error) {
        res.status(500).send({ message: 'Error login.', error });
    }
});

module.exports = userRouter;