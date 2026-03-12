import exp  from 'express'
export const userApp=exp.Router()
import { UserModel } from '../models/UserModel.js'
import { hash,compare } from 'bcryptjs';
import jwt from 'jsonwebtoken'
const  {sign} =jwt;
import { verifyToken } from '../middlewares/verifytoken.js';


//user login
userApp.post('/auth',async(req,res)=>{
    //get user crerd obj from client
    const {email,password}=req.body;
    //verify email
    let user = await UserModel.findOne({email:email})
    if(!user){    // if email not exits
        return res.status(404).json({message:"Invalid email"})
    }
    // compare passwords
    let result = await compare(password,user.password)
    //if password not matched
    if(result==false){
        return res.status(400).json({message:"Incorrect Password"})
    }
    // if passwords are matched  
    //create token (jsonwebtoken or jwt or jaat)
    const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:'1h'})
    // before sending res of token , store token in httpOnly cookie
    res.cookie("token", signedToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false
    });
    //send token in res
    res.status(200).json({message:"login success",payload:user})
})






//define user rest api routes
//create new user
userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    const newUser=req.body;
    //hash the password
    const hashedpassword=await hash(newUser.password,10)
    //replace plain password with hashed password
    newUser.password=hashedpassword;
    //create new user document 
    const newUserDocument=new UserModel(newUser);
    //save
    await newUserDocument.save()
    //send res
    res.status(201).json({message:"User created"});
});

//read all users(protected route)
userApp.get("/users",verifyToken,async(req,res)=>{
    //read all users from db
    let userlist=await UserModel.find();
    //send res
    res.status(200).json({message:"Users",payload:userlist})
})

//read a user by email
userApp.get("/user",verifyToken,async(req,res)=>{
    
    //read user email from req
    const emailOfUser=req.user?.email;

    //find user by email
    const userobj=await UserModel.findOne({email:emailOfUser}).populate("cart.product")
    //if user not found
    if(userobj==null){
        res.status(404).json({message:"user not found",})
        return;    
    }
    //send res
    res.status(200).json({message:"user",payload:userobj})
})

//update user by id
userApp.put("/users/:id",verifyToken,async(req,res)=>{
    //get modified userfrom req
    const modifiedUser=req.body;
    const uid=req.params.id;
    //find user by id and update                                                     new:true is depreciated due to that we will get warning in console
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{returnDocument: "after",runValidators:true})
    //if user not found
    if(updatedUser==null){
        res.status(404).json({message:"user not found",})
        return;    
    }
    //send res
    res.status(200).json({message:"user modified",payload:updatedUser})
})

//delete a user by objectid
userApp.delete("/users/:id",verifyToken,async(req,res)=>{
    //read object it from res params
    const uid=req.params.id
    //find user by id
    let deleteduser=await UserModel.findByIdAndDelete(uid)
    //if user not found
    if(deleteduser==null){
        res.status(404).json({message:"user not found",})
        return;    
    }
    //send res
    res.status(200).json({message:"user deleted",payload:deleteduser})
})


//add product to the cart
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //
    let productId=req.params.pid;
    //
    const emailOfUser=req.user?.email;
    //add product to the cart
    let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
    //
    if(!result){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"product add to cart"})
})


// //copy add product to the cart
// userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
//     //
//     let productId=req.params.pid;
//     //
//     const emailOfUser=req.user?.email;
//     //add product to the cart

//     //Before add,first it should check that product is already in the cart
//     let UserFound=await UserModel.findOne({email:emailOfUser})
//     let productFound=UserFound.findOneAndUpdate({"cart.product":productId},{$set:{count:2}})
//     //if the product is there, then increment count by 1
//     //Otherwise add that product to the cart


//     let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
//     //
//     if(!result){
//         return res.status(404).json({message:"User not found"})
//     }
//     res.status(200).json({message:"product add to cart"})
// })


