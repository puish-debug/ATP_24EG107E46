//function to calculate the sum of n number of elements
function findsum(...a){
    let r=a.reduce((acc,element)=>acc+element);  //reduce method to calculate sum
    console.log(r)
}

//function call
findsum(10,20,30,40,50,60,70,80,90,100);