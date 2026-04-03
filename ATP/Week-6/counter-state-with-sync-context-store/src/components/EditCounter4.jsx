import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider"

function EditCounter4() {

    const {counter,incrementCounter,decrementCounter}=useContext(counterContextObj)
  return (
    <div className="mx-auto  p-5 px-20 m-5 text-center rounded-2xl shadow-2xl bg-blue-300">
        <h1 className="text-5xl p-5 font-medium">EditCounter 4 </h1>
        <h1 className="text-4xl p-5">Counter :  {counter} </h1>
        <button onClick={incrementCounter} className="text-4xl bg-green-500 p-5 rounded-2xl mr-4">+</button>
        <button onClick={decrementCounter} className="text-4xl bg-red-500 p-5 rounded-2xl">-</button>
    </div>
  )
}

export default EditCounter4