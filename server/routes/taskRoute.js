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

taskRouter.put('/updateTask/:taskId', async (req, res) => {
    const taskId = req.params.taskId;
    const { title, description, completed, priority } = req.body;

    try {

        if (req.user._id != req.body.user) {
            return res.status(400).send('You are not allowed to update others task.');
        };

        const taskToUpdate = {
            ...req.body,
        };

        const updateTask = await taskModel.findByIdAndUpdate(taskId, taskToUpdate);

        res.status(200).send({ message: 'Task updated successfully', updateTask });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).send({ error: error.message });
    }
});

taskRouter.delete('/deleteTask/:taskId', async (req, res) => {

    const taskId = req.params.taskId;

    try {
        await taskModel.findByIdAndDelete(taskId);
        res.status(200).send({ message: 'Task deleted successfully!' })
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).send({ error: error.message });
    }
})

module.exports = taskRouter;