import exp from 'express'
export const employeeApp=exp.Router()
import { EmployeeModel } from '../models/EmployeeModel.js';


//create new employee
employeeApp.post("/employee",async(req,res)=>{
    //get new employee obj from req
    const newEmployee=req.body;
    //create new employee document
    const newEmployeeDocument=new EmployeeModel(newEmployee);
    //save
    await newEmployeeDocument.save()
    //send res
    res.status(201).json({message:"Employee created"});
});

//read all employees 
employeeApp.get("/employee",async(req,res)=>{
    //read all employees from db
    let employeelist=await EmployeeModel.find();
    //send res
    res.status(200).json({message:"Employees",payload:employeelist})
})

//update employee by id
employeeApp.put("/employee/:id",async(req,res)=>{
    //get modified employee from req
    const modifiedEmployee=req.body;
    const eid=req.params.id;
    //find employee by id and update 
    const updateEmplyee=await EmployeeModel.findOneAndUpdate({employeeId:eid},{$set:{...modifiedEmployee}},{returnDocument:"after",runValidators:true})
    //if employee not found
    if(updateEmplyee==null){
        res.status(404).json({message:"employee not found"});
        return;
    }
    //send res
    res.status(200).json({message:"employee modified",payload:updateEmplyee})
});

//delete a employee by employee id
employeeApp.delete("/employee/:id",async(req,res)=>{
    //read object from res params
    const eid=req.params.id
    //find employee by employeeid
    let deletedemployee=await EmployeeModel.findOneAndDelete({employeeId:eid})
    //if employee not found
    if(deletedemployee==null){
        res.status(404).json({message:"employee not found"})
        return
    }
    //send res
    res.status(200).json({message:"employee deleted",payload:deletedemployee})
})