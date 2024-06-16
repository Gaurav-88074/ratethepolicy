const mongoose = require('mongoose');
const { UUID, UniqueConstraintError } = require('sequelize');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    }

})
module.exports = mongoose.model('User', userSchema);