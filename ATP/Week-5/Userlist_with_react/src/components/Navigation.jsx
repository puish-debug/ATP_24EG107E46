function Navigation(){
    return(
        <div className="flex justify-between p-5 bg-gray-300">
            <h1 className="pl-10 text-3xl items-center ">LOGO</h1>
            <ul className="flex gap-20">
                <li>Home</li>
                <li>Register</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Navigation