import  mongoose from 'mongoose'
function dbConnect(){
    mongoose.connect("mongodb://127.0.0.1/EchoTalk").then(result=>{
        console.log("Database Connected")
    }).catch((err)=>{    
        console.log("database eroor \n"+err)
    })
}

export default dbConnect