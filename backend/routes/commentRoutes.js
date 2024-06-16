const express = require("express")

const commentRouter = express.Router();
const commentController = require("../controller/VoteController");

// voteRouter.get('/', commentController.getDummyVoteData);
// voteRouter.post('/add', vcommentController.insertNewVote);
// voteRouter.post('/delete', commentController.insertNewVote);

module.exports = commentRouter;