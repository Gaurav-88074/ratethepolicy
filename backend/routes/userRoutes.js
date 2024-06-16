const express = require("express")

const userRouter = express.Router();
const userController = require("../controller/UserController");
//----------------
const voteRoutes = require("./voteRoutes");
//----------------
// userRouter.get('/fire', userController.ourTask);
userRouter.post('/signup', userController.signup);
userRouter.use('/vote', voteRoutes);

module.exports = userRouter;