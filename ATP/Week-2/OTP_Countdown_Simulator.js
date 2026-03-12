console.log("OTP Sent Successfully");

//Variable to count from 10 to 1
countdown=11;

//Using setInterval print countdown value within 10sec
let interval=setInterval(()=>{
    countdown--;
    console.log(countdown);
    if(countdown==0){
        clearInterval(interval);
        console.log("resend otp");
    }
},1000);


