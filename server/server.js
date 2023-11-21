import express from 'express'
import cors from 'cors'
import dbConnect from './Config/dbConnect.js'
import userRouter from './Routers/UserRouter.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
const app=express()
dbConnect()
dotenv.config()
app.use(cookieParser())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:true,limit:'50 mb'}))
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}))

const port= process.env.PORT 

app.use('/user',userRouter)
app.listen(port,(()=>{
    console.log("running")
}))