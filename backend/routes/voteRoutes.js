const express = require("express")

const voteRouter = express.Router();
const voteController = require("../controller/VoteController");

voteRouter.get('/', voteController.getDummyVoteData);
voteRouter.post('/upvote', voteController.insertNewVote);
voteRouter.post('/downvote', voteController.insertNewVote);
voteRouter.post('/deletevote', voteController.deleteExistingVote);

module.exports = voteRouter;
