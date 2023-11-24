import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
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
    pic:{
        type:String, default:"https://imgs.search.brave.com/k0x1hfcoTsGkXAnajUNZGqV6W56e2apf7bSHOAWibSo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/amltLW5pZWxzZW4u/Y29tL2lvcy81MTIv/YW5ncnktYmlyZHMt/Mi0yMDIzLTA4LTI1/LnBuZw"
    }
},{timestamps:true})

UserScehma.methods.matchPasswords= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

UserScehma.pre('save',async function (next){
    if(!this.modified){
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})
const User= mongoose.model("User",UserScehma)
export default User