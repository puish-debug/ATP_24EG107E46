import { useState } from "react";
import { useForm } from "react-hook-form";

function UserForm(){

    const [users,setUser]=useState([]);

    const {register,handleSubmit,formState:{errors}}=useForm();

    //on form submit
    const onFormSubmit=(newUserObj)=>{
        setUser([...users,newUserObj])
    }

    return(
        <div>
            {/* create user form */}
            <div className=" p-10">
                <h1 className="text-center text-4xl font-medium ">Create User Form</h1>
                <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="firstname">firstname</label>
                        <input type="text" {...register("firstname",{required:"firstname required",validate:(v)=>v.trim().length!=0 || "White space is not valid"})} id="firstname" className="p-3 border shadow-2xl w-full"/>
                        {errors.firstname?.type=="required" && <p className="text-red-500">*{errors.firstname.message}</p> }
                        {errors.firstname?.type=="validate" && <p className="text-red-500">*{errors.firstname.message}</p> }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">email</label>
                        <input type="email" {...register("email",{required:"email required",validate:(v)=>v.trim().length!=0 || "White space is not valid"})} id="email" className="p-3 border shadow-2xl w-full"/>
                        {errors.email?.type=="required" && <p className="text-red-500">*{errors.email.message}</p> }
                        {errors.email?.type=="validate" && <p className="text-red-500">*{errors.email.message}</p> }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dateOfBirth">dateOfBirth</label>
                        <input type="date" {...register("dateOfBirth",{required:"dateOfBirth required",validate:(v)=>v.trim().length!=0 || "White space is not valid"})} id="dateOfBirth" className="p-3 border shadow-2xl w-full"/>
                        {errors.dateOfBirth?.type=="required" && <p className="text-red-500">*{errors.dateOfBirth.message}</p> }
                        {errors.dateOfBirth?.type=="validate" && <p className="text-red-500">*{errors.dateOfBirth.message}</p> }
                    </div>

                    <button className="mt-5 p-5 bg-gray-500 text-white block mx-auto" type="submit">Submit</button>
                </form>
            </div>

            {/* create user table */}
            <div className="m-20  p-10">
                <h1 className="text-center text-4xl font-medium mb-5 ">List Of Users</h1>
                <table className="mx-auto border text-center shadow-2xl">
                    <thead >
                        <tr >
                            <th className="p-5 border">FirstName</th>
                            <th className="p-5 border">Email</th>
                            <th className="p-5 border">DateOfBirth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((userObj,index)=>(
                            <tr key={index}>
                                <td className="p-5 border">{userObj.firstname}</td>
                                <td className="p-5 border">{userObj.email}</td>
                                <td className="p-5 border">{userObj.dateOfBirth}</td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>    
    )
}

export default UserForm