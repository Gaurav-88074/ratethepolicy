const express = require("express")

const userRouter = express.Router();
const userController = require("../controller/UserController");

// userRouter.get('/fire', userController.ourTask);
userRouter.post('/signup', userController.signup);
module.exports = userRouter;