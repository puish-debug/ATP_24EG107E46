import exp from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { UserModel } from '../models/UserModel.js'
export const adminApp=exp.Router()


//only two routes
//Read all users and authors (email)
adminApp.get("/users",verifyToken("ADMIN"),async(req,res)=>{
    //get users using email
    const users=await UserModel.find({$or: [{ role: "USER" },{ role: "AUTHOR" }]})
    //if users not found
    if(users.length === 0){
        return res.status(404).json({message:"users not found"})
    }
    res.status(200).json({message:"user list",payload:users})
})

//block or activate users
adminApp.patch("/user",verifyToken("ADMIN"),async(req,res)=>{
    // get email and status from body
    const { email, isUserActive } = req.body;
    // update user
    const user = await UserModel.findOneAndUpdate({ email: email },{ isActive: isUserActive },{ new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({message: "User status updated",payload: user})
})