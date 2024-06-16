const express = require("express")

const commentRouter = express.Router();
const commentController = require("../controller/CommentController");

commentRouter.get('/', commentController.getDummyCommentData);
commentRouter.post('/add', commentController.insertNewComment);
commentRouter.post('/delete', commentController.deleteExistingComment);

module.exports = commentRouter;