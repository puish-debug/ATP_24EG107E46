import jwt from 'jsonwebtoken'
const {verify}=jwt

//cookies parser middleware
export function verifyToken(req,res,next){
    //token verify logic
    const token=req.cookies?.token;
    //if req from unautharized user
    if(token==undefined){
        return res.status(401).json({message:"plz login"})
    }
    //if token is existed
    try{
        const decodedToken=verify(token,'abcdef');
        console.log(decodedToken);
        //attach decoded user to req
        req.user=decodedToken;
        //call next
        next();
    }catch(error){
        res.status(401).json({message:"session expried plz relogin"})
    }
}