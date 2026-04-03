import { Schema,model } from "mongoose";

//create employee Schema
const EmployeeSchema=new Schema({
    //structure of employee resource
    employeeId:{
        type:Number,
        required:[true,"EmployeeId is required"],
        unique:[true,"Employee already existed"]
    },
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"Email already existed"]
    },
    mobile:{
        type:Number,
        required:[true,"mobile is required"]
    },
    designation:{
        type:String,
        required:[true,"designation is required"]
    },
    companyname:{
        type:String,
        required:[true,"companyname is required"]
    }
})

//generate employee model
export const EmployeeModel=model("employee",EmployeeSchema)