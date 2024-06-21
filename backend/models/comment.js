const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id:{
        type : String,
        required :true
    },
    message :{
        type:String,
        required : true,
    },
    postId:{
        type : String,
        ref : 'Post',
        required : true,
    },
    userId:{
        type : String,
        
        required : true,
    }

})
module.exports = mongoose.model('Comment',commentSchema);