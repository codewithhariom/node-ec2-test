const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const User= mongoose.model("user",userSchema)

module.exports= User;
