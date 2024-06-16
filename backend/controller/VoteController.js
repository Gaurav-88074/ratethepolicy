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
    res.status(200).json([
        {message : 'deleted'}
    ]);

}
module.exports ={
    getDummyVoteData,
    insertNewVote,
    deleteExistingVote
}
