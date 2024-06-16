const express = require("express")

const userRouter = express.Router();
const userController = require("../controller/UserController");

userRouter.get('/', userController.getDummyUserData);
userRouter.post('/signup', userController.signup);
module.exports = userRouter;