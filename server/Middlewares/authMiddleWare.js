import  jwt from 'jsonwebtoken'
import User from '../Models/UserModel.js'


export async function protect(req,res){
    let token;
    
    console.log(req.headers);
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
  
        //decodes token id
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        req.user = await User.findById(decoded.id).select("-password");
  
        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  };
  