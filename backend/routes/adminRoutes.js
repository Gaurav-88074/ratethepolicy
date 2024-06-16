const express = require('express')

const adminRouter = express.Router();
const adminController = require('../controller/adminController');
//admin
adminRouter.get("/",adminController.getDummyData);
module.exports =adminRouter;
// adminRouter.post("/uri:",controler.functionName);

