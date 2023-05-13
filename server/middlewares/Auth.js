const jwt = require("jsonwebtoken");
const UserModel = require("../models/usersModel");


const ProtectRoutes = async (req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token){
       return res.json({message:"Invalid Token", stats:"error"})
    }

    try {
        
        const decoded = jwt.verify(token,process.env.SECRET_KEY)

        const user = await UserModel.findById(decoded.id)

        if(!user){
            return res.json({message:"No User Found With This ID", stats:"error"})
        }

        const userData = {
            name:user.name,
            email:user.email,
            id:user._id,
        }

        console.log(userData);
        req.user = userData;

        next()


    } catch (error) {
        console.log(error);
        return res.json({message:"Invalid Token", stats:"error"})
    }

}




module.exports = ProtectRoutes