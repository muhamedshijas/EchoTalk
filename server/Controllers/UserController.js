import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import genereateToken from "../Config/generateToken.js";
//express async handler for handlling the erros automaticallly

export async function registerUser(req,res){
   
  const { name, email, mobileNo, password, pic } = req.body;

  if (!name || !email || !password || !mobileNo) {
    res.status(400);
    throw new Error("please enter all the fields");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    mobileNo,
  });
  

  if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        pic:user.pic,
        token:genereateToken(user._id)
    })
  }else{
    res.status(400);
    throw new Error("failed to create")
  }

}

export async function loginUser(req,res){
    const {email,password}=req.body
    const user= await User.findOne({email})

    if(user&& user.password===password){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:genereateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error("invalid email or password")
    }
}