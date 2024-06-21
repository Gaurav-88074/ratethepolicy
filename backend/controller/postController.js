const Post = require('../models/post');
async function getDummypostData(req, res, next) {
    res.status(200).json([
        {
            "_id": "UUID",
            "postId": "true",
        },
    ]);
};
async function fetchAllPost(req, res, next) {
    // Post.find().populate('Comment')
    // .then((PostObjs)=>{
    //     res.status(200).json(PostObjs);
    // })
    // .catch((error)=>{
    //     res.status(401).json(error);
    // })
    try {
        const posts = await Post.aggregate([
            {
                $lookup: {
                    from: 'comments', // collection name in MongoDB
                    localField: '_id',
                    foreignField: 'postId',
                    as: 'comments'
                }
            },
            {
                $lookup: {
                    from: 'votes', // collection name in MongoDB
                    localField: '_id',
                    foreignField: 'postId',
                    as: 'votes'
                }
            }
        ]);
        res.status(200).json(posts);
        // console.log(posts);
    } catch (error) {
        res.status(401).json(error);
    }
    
};
module.exports ={
    getDummypostData,
    fetchAllPost
}