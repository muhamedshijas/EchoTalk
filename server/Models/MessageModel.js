import mongoose from "mongoose";

const messageSchema= mongoose.Schema({

    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    content:{
        type:String,
        trim:true
    },
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat"
    },

},{
    timeStamps:true
})

const Message = mongoose.Model("Message",messageSchema)
export default Message