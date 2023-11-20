import express from 'express'
import cors from 'cors'
import dbConnect from './Config/dbConnect.js'
import userRouter from './Routers/UserRouter.js'
import cookieParser from 'cookie-parser'
const app=express()
dbConnect()
app.use(cookieParser())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:true,limit:'50 mb'}))
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}))


app.use('/user',userRouter)
app.listen(5000,(()=>{
    console.log("running")
}))