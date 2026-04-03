import { useState,useEffect } from "react"
import { useNavigate } from "react-router";
import axios from 'axios';

function ListOfEmps() {

    const [emps,setEmps]=useState([])
    let[loading,setLoading]=useState(false);
    let[error,setError]=useState(null);

    const navigate=useNavigate();

    const gotoEmployee=(empObj)=>{
        //avigate to employee
        navigate("/employee",{state:empObj})
    }

    const gotoEditEmployee=(empObj)=>{
        //avigate to employee
        navigate("/edit-emp",{state:empObj})
    }

    const deleteEmp=async(id)=>{
        setLoading(true);
        try{
            let res=await axios.delete(`http://localhost:4000/employee-api/employee/${id}`)
            if(res.status==200){
                getEmps();
            }
        }catch(err){
            setError(err);
        }
        finally{
            setLoading(false);
        }
    }

    //a function to make api req
    async function getEmps(){
        setLoading(true);
        try{
            let res=await axios("http://localhost:4000/employee-api/employee")
            if (res.status === 200) {
                let resObj = res.data
                setEmps(resObj.payload);
            }
        }catch(err){
            setError(err);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        //call
        getEmps()
    },[])

    if(loading==true){
        return <p className="text-center text-5xl">Loading...</p>
    }

    if(error!=null){
        return <p className="text-center text-5xl text-red-500 ">{error.message}</p>
    }
  return (
    <div>
            <h1 className="text-4xl pt-8 text-center font-medium">List of users</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center mx-12 mt-15">
                {emps.map((empObj)=>(
                    <div key={empObj.employeeId} className=" bg-white p-5 rounded-2xl shadow-2xl">
                        <p>{empObj.name}</p>
                        <p>{empObj.email}</p>
                        <ul className="flex justify-around mt-5 ">
                            <li><button onClick={()=>gotoEmployee(empObj)} type="button" className="bg-green-500 rounded-md p-2 ">View</button></li>
                            <li><button onClick={()=>gotoEditEmployee(empObj)} type="button" className="bg-yellow-500 rounded-md p-2 ">Edit</button></li>
                            <li><button onClick={()=>deleteEmp(empObj.employeeId)} type="button" className="bg-red-500 rounded-md p-2 ">Delete</button></li>
                        </ul>
                    </div>
                    ))
                }
            </div> 
        </div>
  )
}

export default ListOfEmps;