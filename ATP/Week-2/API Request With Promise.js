//fetch() is used to make an HTTP request to a server
fetch('https://jsonplaceholder.typicode.com/posts')

// The first .then() runs when the server sends a response
.then((res)=>res.json())

// The second .then() runs after JSON conversion is complete
.then((postdata)=>console.log(postdata))

// .catch() runs if any error occurs
.catch((err)=>console.log("err is :",err));