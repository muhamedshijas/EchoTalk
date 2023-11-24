import jwt from "jsonwebtoken";
const genereateToken=(id)=>{
    return jwt.sign({id}),process.env.JWT_SECRET,{
        expirenIn:"30d"
    }
}

export default genereateToken