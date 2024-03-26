const express = require('express');
const taskModel = require('../models/taskModel');

const taskRouter = express.Router();

taskRouter.post('/addTask', async (req, res) => {
    const { title, description, completed, priority } = req.body;

    try {
        if (!title || !description === undefined) {
            return res.status(400).send({ message: 'Please fill all fields!' })
        }

        const newTask = {
            title,
            description,
            completed: false,
            priority,
            user: req.user._id
        };

        await taskModel.create(newTask);

        res.status(201).send({ message: 'Task created successfully', newTask });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = taskRouter;