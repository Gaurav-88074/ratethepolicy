const express = require('express')

const userRouter = express.Router();
// const userController = require("../controller/userController");
//admin
// adminRouter.get("/",adminController.getDummyData);
module.exports =userRouter;const express = require("express")

const userRouter = express.Router();
const userController = require("../controller/UserController");

userRouter.get('/', userController.getDummyUserData);
userRouter.post('/signup', userController.signup);
module.exports = userRouter;