const mongoose = require('mongoose');
const { UUID } = require('sequelize');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
    _id:{
        type : String,
        required :true
    },
    userId:{
        type : String,
        required : true,
    },
    postId:{
        type : String,
        required : true,
    },
    value :{
        type:Number,
        required : true,
    },

})
module.exports = mongoose.model('Vote',voteSchema);