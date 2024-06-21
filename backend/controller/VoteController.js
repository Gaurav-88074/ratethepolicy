const { v4: uuidv4 } = require('uuid'); 
const Vote = require('../models/vote');
async function getDummyVoteData(req, res, next) {
    res.status(200).json([
        {
            "_id": "UUID",
            "postId": "postId",
            "userId": "userId",
            "value": 1,
        },
        {
            "_id": "UUID",
            "postId": "postId",
            "userId": "userId",
            "value": -1,
        },
    ]);
};
async function fetchAllVotes(req, res, next) {
    // useless
    Vote.find()
    .then((votes)=>{
        res.status(200).json(votes);
    }).catch((error)=>{
        res.status(401).json(error);
    })
};
async function insertNewVote(req, res, next) {
    const {userId,postId,value} = req.body;
    console.log(req.body);
    const uuid = uuidv4();
    const newVoteObject = new  Vote({
        _id : uuid,
        userId:userId,
        postId:postId,
        value : value
    });
    newVoteObject.save()
    .then((obj)=>{
        res.status(200).json(obj);
    }).catch((error)=>{
        res.status(401).json(error);
    })

}
async function deleteExistingVote(req, res, next) {
    const voteId = req.body.voteId; 
    Vote.findByIdAndDelete(voteId)
    .then((x)=>{
        res.status(200).json(x);
    }).catch((error)=>{
        res.status(401).json(error);
    })

}
module.exports ={
    getDummyVoteData,
    insertNewVote,
    deleteExistingVote,
    fetchAllVotes
}
