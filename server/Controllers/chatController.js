import Chat from '../Models/ChatModel.js'
export async function accessChat(req,res){
    const {userId}= req.body.id
    if(!userId){
        console.log("no user found");
        res.sendStatus(400)
    }

    var chat=await Chat.find({
        isGroup:false,
        $and:[
            {users:{$elemen}}
        ]
    })
}