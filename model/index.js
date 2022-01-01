const mongoose = require("mongoose");


const User = mongoose.model(
    "User", 
    new mongoose.Schema({
        username : String,
        email : {
            type : String,
            required : true,
            unique : true
        },
        password: {
            type : String,
            required: true,
        },
        role : {
            type : String,
            default : 'USER'
        }
    })
);
module.exports = User; 