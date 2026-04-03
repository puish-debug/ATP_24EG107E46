import { useLocation } from "react-router"

function Employee() {

    const {state}=useLocation()
    

  return (
    <div className="p-15">
        <h1 className="font-medium text-center text-4xl">{state.name}</h1>
        <div className="text-3xl m-10">
            <p className="my-5">Employe Id:{state.employeeId}</p>
            <p className="my-5">Name :{state.name}</p>
            <p className="my-5">Email :{state.email}</p>
            <p className="my-5">Mobile :{state.mobile}</p>
            <p className="my-5">Designation :{state.designation}</p>
            <p className="my-5">Companyname :{state.companyname}</p>
        </div>
    </div>
  )
}

export default Employee