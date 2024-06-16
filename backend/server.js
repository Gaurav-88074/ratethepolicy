const express = require("express");
const bodyParser = require("body-parser");
const { createServer } = require("http");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
//------------------------------------
const mongoose = require("mongoose");
const Org = require("./models/org");
//-------------------------------------
app.use(cors());
app.use(bodyParser.json()); //application json
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, UPDATE,PATCH"
    );
    res.header("Access-Control-Request-Method", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Max-Age", 2592000); // 30 days

    // "Content-Type": "application/json",
    next();
});
// app.use('/auth', authRoutes);
app.get('/', (req, res, next) => {
    res.status(200).json([
        {
            id: 1,
            user: "Gaurav",
        },
        {
            id: 2,
            user: "Amit",
        },
    ]);
});
// app.get('/insert', (req, res, next) => {
//     const orgObj = {
//         _id: '5d7b12c9-8153-47b8-969b-318d4b44304e',
//         organizationName: "STARK",
//         organizationPassword: "password",
//         organizationCode: 3000,
//     }
//     const orgObject = new Org(orgObj);
//     orgObject.save().then(()=>{
//         console.log("inserted");
//     }).catch((er)=>{
//         console.log(er);
//     })
//     res.status(200).json([
//         {
//             message: "invoked"
//         }
//     ]);
// });

mongoose
    .connect(
        "mongodb+srv://ratethepolicy2024:F4iFy3VWS56rb8ht@cluster0.orncmrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
        console.log("DB connected");
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    }).catch((error) => {
        console.log(error);
    });
