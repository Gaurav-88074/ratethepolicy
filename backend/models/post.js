const mongoose = require('mongoose');
const { UUID } = require('sequelize');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id:{
        type : String,
        // required :true
    },
    text :{
        type:String,
        // required : true,
    },
    image:{
        type:Buffer,
        // required : true,
    },
    document:{
        type:Buffer,
        // required : true,
    },
    caption:{
        type:String,
        // required : true,
    },
    orgId:{
        type : String,
        required : true,
    }

})
module.exports = mongoose.model('Post',postSchema);