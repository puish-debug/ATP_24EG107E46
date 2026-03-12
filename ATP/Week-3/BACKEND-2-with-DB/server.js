//create express app
import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPIs.js'
import { productApp } from './APIs/ProductAPIs.js'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'

config();//process.env.PORT,process.env.DB_URL,

const app=exp()

//add body parser middleware 
app.use(exp.json())

//add cookie parser middleware
app.use(cookieParser())

//forward req to userapp if path
app.use("/user-api",userApp)

//forward req to productapp if path
app.use("/product-api",productApp)

//connect to DB server
async function connectDB() {
    try{
        await connect(process.env.DB_URL);
        console.log("db connection success");
        //start server
        const port=process.env.PORT || 4000
        app.listen(port, ()=> console.log(`server listening port ${port} ...`))
    }catch(err){
        console.log("err in DB connection:",err);
    }
}

connectDB();

//error handiling middleware
app.use((err,req,res,next)=>{
    
    console.log(err)
    //ValidationError
    if(err.name=='ValidationError'){
        return res.status(400).json({message:"error oucured",error:err.message})
    }
    //CastError
    if(err.name=='CastError'){
        return res.status(400).json({message:"error oucured",error:err.message})
    }
    //send server side error
    return res.status(500).json({message:"error oucured",error:"Server side error"})
})  