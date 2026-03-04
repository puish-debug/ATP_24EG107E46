//object for cart items
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];


//filter method to filter and get only instock products
const f=cart.filter((item)=>item.inStock==true)
console.log(f)


//map method to create a new array with {name,totalprice}
const m=cart.map((item)=>({name: item.name, totalprice: item.price*item.quantity}))
console.log(m)


//reduce method to calculate the grand total of cart value
const r=cart.reduce((acc,cartobj)=>acc+(cartobj.price*cartobj.quantity),0)
console.log(r)

//find method to get detailes of "Mouse"
const f1=cart.find((item)=>item.name=="Mouse")
console.log(f1)

//findIndex method to find the Index of "Keyboard"
const f2=cart.findIndex((item)=>item.name=="Keyboard")
console.log(f2)