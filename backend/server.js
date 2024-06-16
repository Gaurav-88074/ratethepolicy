const express = require('express')
const bodyParser = require('body-parser');
const { createServer } = require('http');
const cors = require('cors');
require("dotenv").config()
const port = process.env.PORT
const app = express()

app.use(cors());
app.use(bodyParser.json());//application json
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE,PATCH");
    res.header('Access-Control-Request-Method', "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header('Access-Control-Max-Age', 2592000); // 30 days
      
    // "Content-Type": "application/json",
    next();
})
// app.use('/auth', authRoutes);
app.listen(port, () => console.log(`Server is running on port ${port}`));

