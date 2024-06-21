const express = require("express")

const postRouter = express.Router();
const postController = require("../controller/postController");

postRouter.get('/retrive', postController.fetchAllPost);

module.exports = postRouter;
