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
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require("./routes/userRoutes");
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
//routing
app.use('/', adminRoutes);
app.use('/auth', adminRoutes);
app.use('/user', userRoutes);



mongoose
    .connect(
        process.env.MONGODB_CONNECTION_STRING
    )
    .then(() => {
        console.log("DB connected");
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    }).catch((error) => {
        console.log(error);
    });
