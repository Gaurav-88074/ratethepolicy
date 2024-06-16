const { UUIDV4 } = require("sequelize");
const Post = require("../models/post");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getDummyUserData = async (req, res, next) => {
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

// Regex for validation
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password


// Unique username generator
const uniqueUsernameGenerator = async (email) => {
    let username = email.split('@')[0];

    let isUsernameNotUnique = await User.exists({ "username": username }).then((result) => result)
    // Importing nanoid in this way coz nanoid has been published as a module and need {import x from y} statement to get imported on the top.
    // Hence, a workaround is dynamic importing as follows.
    const { nanoid } = await import('nanoid');
    isUsernameNotUnique ? username += nanoid().substring(0, 5) : "";

    return username;
}


// Frontend formated data
const frontendFormatedData = async (userData) => {
    const access_token = jwt.sign({ id: userData._id }, process.env.ACCESS_TOKEN_SECRET);

    return {
        access_token,
        name: userData.name,
        username: userData.username,
        email: userData.email
    }
}


// User registration function
const signup = async (req, res, next) => {
    let { name, email, username, password } = req.body;


    // Data validation
    if (name.length < 3) {
        return res.status(403).json({ "error": "Name must be at least 3 characters long!" })
    }

    if (!email.length) {
        return res.status(403).json({ "error": "Email is required!" })
    }

    if (!emailRegex.test(email)) {
        return res.status(403).json({ "error": "Invalid email!" })
    }

    if (!passwordRegex.test(password)) {
        return res.status(403).json({ "error": "Password must be 6 to 20 characters long and must contain at least one numeric, one lowercase and one uppercase character" })
    }


    // Password encryption
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async (err, hashPass) => {
        // Generating unique username
        const uniqueUsername = await uniqueUsernameGenerator(email);


        const { nanoid } = await import("nanoid");
        const uniqueId = nanoid();

        // creating user schema
        let newUser = new User({
            _id: uniqueId,
            email,
            name,
            username: uniqueUsername,
            password: hashPass
        });

        // console.log(newUser);

        // Save user data
        newUser.save()
            .then(async (returnedUserData) => {
                const finalData = await frontendFormatedData(returnedUserData)
                console.log(finalData);
                console.log(returnedUserData)
                return res.status(200).json({
                    "message": "User created successfully!",
                    finalData
                });
                // return res.status(200).json(frontendFormatedData(returnedUserData));
            }).catch(err => {
                // console.log("Found error");
                if (err.code == 11000) {
                    return res.status(500).json({ "error": "Email already exist!" })
                }

                // console.log("Got error 2");
                return res.status(500).json({ "error": err.message });
            })
    });


    // res.status(200).json({
    //     message: "User created successfully",
    //     user: {
    //         name,
    //         email,
    //         username,
    //         password
    //     },
    // });
}


// Login function
async function login(req, res, next) {
    let { email, password } = req.body;

    try {
        const userData = await User.findOne({ "email": email });
        if (!userData) {
            return res.status(403).json({ "error": "User not found!" });
        }

        // Comparing password
        const isMatch = await bcrypt.compare(password, userData.password);
        if (!isMatch) {
            return res.status(403).json({ "error": "Invalid Password!" });
        }

        const finalData = await frontendFormatedData(userData);
        return res.status(200).json(finalData);

    } catch (err) {
        return res.status(500).json({ "error": err.message });
    }

};


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
    login
}