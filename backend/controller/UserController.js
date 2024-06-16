const Post = require("../models/post");
async function getDummyUserData(req, res, next) {
    res.status(200).json([
        {
            "_id": "niuheuNDNLIHEKhffkjnKUHEF8_Yjfoey87ry3wjnro83",
            "name": "John Doe",
            "email": "jhondoe@policy.com",
            "username": "Jhondoe3000",
            "password": "jdiqywhdn89qyn8398nd98w83ynf93w8yrhfn89qkpn83of"
        },
    ]);
};

async function signup(req, res, next) {
    let { name, email, username, password } = req.body;

    // TO DO: Implement user registration logic here
    res.status(200).json({
        message: "User created successfully",
        user: {
            name,
            email,
            username,
        },
    });
}
// async function ourTask(req, res, next) {
    
//     const newPostObject = new Post({
//         _id : 'ac105325-8845-4575-bbaf-9c43e03f026e',
//         orgId : "5d7b12c9-8153-47b8-969b-318d4b44304e",
//         text : "Rate this policy"
//     })
//     newPostObject.save()
//     .then(()=>{
//         console.log("post created");
//     }).catch((error)=>{
//         console.log(error);
//     })
//     // TO DO: Implement user registration logic here
//     res.status(200).json({
//         message: "invoked"
//     });
// }

module.exports = {
    getDummyUserData,
    signup,
}