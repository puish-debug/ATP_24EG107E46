import  { NavLink } from 'react-router';

function Header() {
  return (
    <nav className='flex justify-end text-3xl p-7 gap-6 bg-gray-500'>
        <NavLink to="" className={({isActive})=>isActive? "text-white" : " " }>Home</NavLink>
        <NavLink to="create-emp" className={({isActive})=>isActive? "text-white" : " " }>CreateEmp</NavLink>
        <NavLink to="list" className={({isActive})=>isActive? "text-white" : " " }>List Of Employees</NavLink>
    </nav>
  )
}

export default Header