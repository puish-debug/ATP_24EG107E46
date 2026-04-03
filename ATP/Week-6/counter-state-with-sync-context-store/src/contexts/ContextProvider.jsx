import { createContext,useState } from "react";

export const counterContextObj=createContext();


function ContextProvider({children}){
    //state
    const [counter,setCounter]=useState(0);
    
    //functions to change state
    const incrementCounter=()=>{
        setCounter(counter+1)
    }

    const decrementCounter=()=>{
        setCounter(counter-1)
    }


    return(<counterContextObj.Provider value= {{counter,counter1, incrementCounter , decrementCounter}}>
        {children}
        </counterContextObj.Provider>)
}

export default ContextProvider;