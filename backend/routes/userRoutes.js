const express = require("express")

const userRouter = express.Router();
const userController = require("../controller/UserController");
//----------------
const voteRoutes = require("./voteRoutes");
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
//----------------
// userRouter.get('/fire', userController.ourTask);
userRouter.post('/signup', userController.signup);

userRouter.use('/vote', voteRoutes);
userRouter.use('/comment', commentRoutes);
//bit useless
userRouter.use('/post', postRoutes);

userRouter.post('/login', userController.login);
module.exports = userRouter;