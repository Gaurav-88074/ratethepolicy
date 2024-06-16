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

module.exports = {
    getDummyUserData,
    signup
}