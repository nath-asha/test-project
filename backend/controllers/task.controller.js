const taskModel = require("../models/task.model");

exports.getAll = async (req, res) =>{
    try {
        const alltask = await taskModel.find();
        res.status(200).json(alltask);
    } catch (error) {
        res.status(500).send("error: " + error);
    }
}

exports.createtask = async (req, res) => {
    try{
        const data = req.body;
        const taskModel = new taskModel(data);
        const response = await taskModel.save();
        res.status(200).json(response);
    }catch(error){
        res.status(500).send("error: " + error);
    }
}