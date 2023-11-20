import UserModel from "../Models/UserModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

var salt=bcrypt.genSaltSync(10)
export async function UserSignUp(req,res){
    try{
       const {name,email,mobileNo,password}=req.body
       const existUser=await UserModel.findOne({email:email})
       if(existUser){
        return res.json({error:true,message:"user Exist"})
       }else{
        const hashPassword=bcrypt.hashSync(password,salt)
        const newUser=new UserModel({name,email,mobileNo,password:hashPassword})
        await newUser.save()
        const token =jwt.sign({
            id:newUser._id
        },"myjwtsecretkey"
        )
        return res.cookie("userToken",token,{
            httpOnly:true,
            secure:true,
            maxAge:1000*60*60*24*7,
            sameSite:"none"
        }).json({err:false})

       }
    }catch(err){
        console.log(err)
    }
}

export async function checkUserLoggedIn(req,res){
    try{
        const token=req.cookies.userToken
        if(!token){
            return res.json({loggedIn:false,err:true,message:"session expierd"})
        }
        const verifiedJwt=jwt.verify(token,"myjwtsecretkey")
        const user =await UserModel.findById(verifiedJwt.id,{password:0})
        if(!user){
            return res.json({loggedIn:false})
        }
        return res.json({user,loggedIn:true})
    }catch(err){
        console.log(err)
        return res.json({loggedIn:false,error:err})
    }
}

export async function userLogin(req,res){
   try{
    const {email,password}=req.body
    console.log(req.body);
    const user=await UserModel.findOne({email})
    if(!user){
        return res.json({error:true,message:"no such user found"})
    }
    const validUser=bcrypt.compareSync(password,user.password)
    console.log(user.password)
    if(!validUser){
        return res.json({error:true,message:"Wrong Password"})
    }
    const token =jwt.sign({
        id:user._id
    },"myjwtsecretkey"
    )
    return res.cookie("userToken",token,{
        httpOnly:true,
        secure:true,
        maxAge:1000*60*60*24*7,
        sameSite:"none"
    }).json({err:false})
   }catch(err){
    console.log("err", err)
    return res.json({error:true,message:err})

   }
}


export async function userLogout(req,res){
res.cookie("userToken","",{
    httpOnly:true,
    expires:new Date(0),
    secure:true,
    sameSite:"none"
}).json({message:"logged out",error:false})
}