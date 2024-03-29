const {Schema, model} = require("mongoose");
const {emailRegExp} = require("../../../RegExp");
const {handleMongooseError} = require("../../../helpers");

const userSchema = new Schema({
        name:{
            type:String,
            required:true,
        },
        email: {
            type:String,
            match:emailRegExp,
            required:true,
            unique:true,
        },
        password: {
            type:String,
            minlength:6,
            required:true,
        },
        token: {
            type: String,
            default: "",
        },
    },
    {
        versionKey:false,
        timestamps:true,
    });

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = {
    User,
}