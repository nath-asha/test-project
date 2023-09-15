const router = require("express").Router();
const taskController = require("../controllers/task.controller");

router.post("/", taskController.createtask);
router.get("/", taskController.getAll);

module.exports = router;