const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean },
    priority: { type: String, enum: ['low', 'medium', 'high'] },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = taskModel;