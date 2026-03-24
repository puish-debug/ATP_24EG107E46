function User(props){

    const {user}=props;

    return(
        <div className='shadow-2xl p-10 rounded-4xl bg-linear-to-br from-indigo-200 via-white to-purple-200 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 cursor-pointer'>
            <img className='mx-auto rounded-full w-24 h-24 object-cover ring-4 ring-indigo-300 hover:ring-purple-400 transition' src={user.image} alt="img" />
            <h1 className='text-lg font-bold text-gray-800 mt-4'>{user.name}</h1>
            <p className='text-gray-600 text-sm'>{user.email}</p>
        </div>
    )
}

export default User;