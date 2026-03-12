//array of temperatures with the values
const temperatures = [32, 35, 28, 40, 38, 30, 42]

//using filter for temperatures above 35
const f=temperatures.filter((element)=>element>35)
console.log(f)

//map to convet temperature from celsius to fahrenheit  
const m=temperatures.map((element)=>element=((9/5)*element)+32)
console.log(m)

//reduce method to calculate the average of the temperature
let r=temperatures.reduce((acc,element)=>acc+element)
console.log(r/(temperatures.length))


//find method to find the temperature above 40
const f1=temperatures.find((element)=>element>40)
console.log(f1)

//findIndex method to find the index of temperature of 28
const f2=temperatures.findIndex((element,index)=>element==28)
console.log(f2)