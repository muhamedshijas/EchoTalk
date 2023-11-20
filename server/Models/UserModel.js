import mongoose from "mongoose";
const UserScehma =new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    mobileNo:{
        type:Number,
    },
})
const UserModel= mongoose.model("User",UserScehma)
export default UserModel