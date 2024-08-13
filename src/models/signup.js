const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    institute:{
        type: String,
        required: true
    },
    year:{
        type: Number, 
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const Authentication = mongoose.model('Authentication', userSchema);
module.exports = Authentication;
