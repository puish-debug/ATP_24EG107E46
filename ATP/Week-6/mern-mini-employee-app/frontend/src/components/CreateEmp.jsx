import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function CreateEmp() {

    let[loading,setLoading]=useState(false);
    let[error,setError]=useState(null);
    const navigate=useNavigate();

    const {register,handleSubmit,formState:{errors}}=useForm();

    const onFormSubmit=async(newEmpObj)=>{
        try{
            setLoading(true);
            //make http req
            let res=await fetch("http://localhost:4000/employee-api/employee",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(newEmpObj)
            });
            if(res.status==201){
                navigate("/list")
            }else{
                let errorRes=await res.json()
                console.log("error responce is ", errorRes);
                throw new Error(errorRes.reason);
            }
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }   
    };

    if(loading==true){
        return <p className="text-center text-5xl">Loading...</p>
    }

    if(error!=null){
        return <p className="text-center text-5xl text-red-500 ">{error.message}</p>
    }

  return (
    <div>
        <h1 className='pt-8 text-center text-4xl'>Create New Employee</h1>
        <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="employeeId">EmployeeId :</label>
            <input type="number" {...register("employeeId",{required:"employeeId required",validate:(v)=>v !==null && v!=="" || "White space is not valid"})} id="employeeId" className="p-3 mt-2 mb-5 border-2 rounded-2xl shadow-2xl block mx-auto w-full"/>
            
            <label htmlFor="name">Name :</label>
            <input type="text" {...register("name",{required:"name required",validate:(v)=>v.trim().length!=0 || "White space is not valid"})} id="name" className="p-3 mt-2 mb-5 border-2 rounded-2xl shadow-2xl block mx-auto w-full"/>
            
            <label htmlFor="email">Email :</label>
            <input type="email" {...register("email",{required:"email required",validate:(v)=>v.trim().length!=0 || "White space is not valid"})} id="email" className="p-3 mt-2 mb-5 border-2 rounded-2xl shadow-2xl block mx-auto w-full"/>
            
            <label htmlFor="mobile">Mobile :</label>
            <input type="number" {...register("mobile",{required:"mobile required",validate:(v)=>v !==null && v!=="" || "White space is not valid"})} id="mobile" className="p-3 mt-2 mb-5 border-2 rounded-2xl shadow-2xl block mx-auto w-full"/>
            
            <label htmlFor="designation">Designation :</label>
            <input type="text" {...register("designation",{required:"designation required",validate:(v)=>v.trim().length!=0 || "White space is not valid"})} id="designation" className="p-3 mt-2 mb-5 border-2 rounded-2xl shadow-2xl block mx-auto w-full"/>
            
            <label htmlFor="companyname">Companyname :</label>
            <input type="text" {...register("companyname",{required:"companyname required",validate:(v)=>v.trim().length!=0 || "White space is not valid"})} id="companyname" className="p-3 mt-2 mb-5 border-2 rounded-2xl shadow-2xl block mx-auto w-full"/>
            <button className="mt-5 p-5 bg-gray-500 text-white block mx-auto rounded-2xl" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CreateEmp