//Promise
console.log("I will send 10000 tommorow");
   
let futureCondition=true;
// Promise producer ( creates promise )
const promiseObj=new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(futureCondition===true){
            fulfilled("i have recieved 10000");
        }
        else{
            rejected("i have not recieved 10000");
        }
    },5000);
});
// Promise consumer
promiseObj
.then((message)=>console.log(message))
.catch((errorMessage)=>console.log(errorMessage));

