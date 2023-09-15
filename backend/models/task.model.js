const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    task_name: {
        type: 'string',
        required: true,
    },
    task_images: {
        type: 'array',
        required: true,
    },
    description: {
        type: "string",
        required: true,
    },
    priority: {
        type: "string",
        required: true,
    },
    time_to_complete: {
        type: "string",
        required: true,
    },
    category: {
        type: "string",
        required: false,
    },
    creator_id: {
        type: "string",
        required: false,
    },
});

module.exports = mongoose.model("tasks", taskSchema);