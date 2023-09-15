const router = require("express").Router();
const userController = require("../controllers/user.controller");
const routeCheck = require("../middleware");
router.post("/login", routeCheck, userController.authFunc);
router.get("/:id", routeCheck, userController.getUserById);

module.exports = router;