const express = require("express")

const userRouter = express.Router();
const userController = require("../controller/UserController");
//----------------
const voteRoutes = require("./voteRoutes");
const commentRoutes = require("./commentRoutes");
//----------------
// userRouter.get('/fire', userController.ourTask);
userRouter.post('/signup', userController.signup);

userRouter.use('/vote', voteRoutes);
userRouter.use('/comment', commentRoutes);

userRouter.post('/login', userController.login);
module.exports = userRouter;