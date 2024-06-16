const mongoose = require('mongoose');
const { UUID } = require('sequelize');
const Schema = mongoose.Schema;

const orgSchema = new Schema({
    _id:{
        type : String,
        required :true
    },
    organizationName :{
        type:String,
        required : true,
    },
    organizationPassword:{
        type:String,
        required : true,
    },
    organizationCode:{
        type:Number,
        required : true,
    }

})
module.exports = mongoose.model('Org',orgSchema);