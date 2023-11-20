import express from 'express'
import cors from 'cors'
const app=express()
app.use(express.json({limit:'50mb'}))
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}))
app.post('/login',(req,res)=>{
    console.log(req.body)
})

app.listen(5000,(()=>{
    console.log("running")
}))