import exp from 'express'
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { employeeApp } from './APIs/EmployeeAPIs.js';
import cors from 'cors';

config();

const app=exp()

//cors middleware   
app.use(cors({
    origin:['http://localhost:5173'],
}))

//add body parser middleware 
app.use(exp.json())

//forward req to employeeapp if path
app.use("/employee-api",employeeApp)

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

//call
connectDB()


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