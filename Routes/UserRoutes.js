const router = require('express').Router();
const userController = require("../Controller/UserController")

router.post("/user",userController.createUsers)
router.post("/login",userController.loginUser)
router.get("/user",userController.getAllUsers)
router.delete("/user/:id",userController.deleteUser)
router.get("/user/:id",userController.getUserById)
router.put("/user/:id",userController.updateUser)


module.exports = router;
