const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {config} = require("../config/Config");

const verifyUserToken = (req,res,next)=>{
    let token = req.headers.authorization;
    if(!token){
       return res.status(401).send("No token provided");
    }

    try{
        token = token.split(' ')[1].trim();
        if(token===null || !token){
            return res.status(401).send("Invalid token || Unauthorized Request");
        }
        let verifyUser = jwt.verify(token, config.TOKEN_SECRET);
        console.log("Verify User",verifyUser);
        if(!verifyUser){
            return res.status(401).send("Invalid Token provided || Unauthorized Request");
        }
        req.user = verifyUser;
        next();
    }catch(err){
        console.log(token);
        return res.status(401).send("Invalid Token provided || Unauthorized Request");
    }
}

module.exports = verifyUserToken