// Create HTTP server
import exp from 'express'
const app=exp()

//use body parser middleware
app.use(exp.json())

// set a port number
const port=3000

// to assign port number to HTTP server
app.listen(port, ()=> console.log(`server listening port ${port} ...`))

//users api
let users=[]

//create  API  (REST API - special api ) - Representational State Transfer

// Route to handle GET req of Client (http://localhost:3000/users)
app.get('/users',(req,res)=>{
    // send all users & send res
    res.json({message:"all the users",payload:users});
})

// route to get a user if found using id else send message not found
app.get('/users/:id',(req,res)=>{
    // get id of user from url parameter
    let idOfUrl=Number(req.params.id)  // {id:5}
    // find user
    let user=users.find(userObj=>userObj.id==idOfUrl)
    // id user not found
    if(user==undefined){
        return res.json({message:"User not found"})
    }
    // send response as user object
    res.json({message:"a user",payload:user});    
})

// Route to handle POST req of Client
app.post('/users',(req,res)=>{
    // get user from client
    const newUser=req.body
    //push user into users
    users.push(newUser)
    //send response
    res.json({message:"User created"})    
})
// Route to handle PUT req of Client
app.put('/users',(req,res)=>{
    // get modified user from client
    let modifiedUser=req.body;
    // get index of existing user in users array
    let index=users.findIndex(userObj=>userObj.id==modifiedUser.id)
    // id user not found
    if(index==-1){
        return res.json({message:"User not found"})
    }
    //update user with index
    users.splice(index,1,modifiedUser)
    // send response
    res.json({message:"User Updated"})   
})

// Route to handle DELETE req of Client
app.delete('/users/:id',(req,res)=>{
    // get id of user from url parameter
    let idOfUrl=Number(req.params.id)  // {id:5}
    //
    let index=users.findIndex(userObj=>userObj.id==idOfUrl)
    // id user not found
    if(index==-1){
        return res.json({message:"User not found to delete"})
    }
    // delete user by indez
    users.splice(index,1)
    //send res
    res.json({message:"User removed"})
})



//product api
let product=[]


//route to handle get request of client(http://localhost:3000/prodect)
app.get('/product',(req,res)=>{
    res.json({message:"all the product",payload:product});
})

//route to handle get request of client by specific id
app.get('/product/:productId',(req,res)=>{
    //get id of product from url parameter
    let idOfUrl=Number(req.params.productId);
    //finding the index
    let pro=product.find((productobj)=>productobj.productId==idOfUrl)
    //product id not found
    if(pro==undefined){
        return res.json({message:"Product not found"});
    }
    //send res
    res.json({message:"a product",payload:pro})
})

//route to handle post request of client
app.post('/product',(req,res)=>{
    //get product from client
    const newproduct=req.body
    //push product into product
    product.push(newproduct)
    //send res
    res.json({message:"product created"})
})

//route to handle put request of client
app.put('/product',(req,res)=>{
    //get modified product from client{}
    let modifiedproduct=req.body;
    //get index of existing product in product array
    let index=product.findIndex((productobj)=>productobj.productId==modifiedproduct.productId)
    //product id not found
    if(index==-1){
        return res.json({message:"product not found"});
    }
    //update product by index
    product.splice(index,1,modifiedproduct);
    //send res
    res.json({message:"product updated"});
})

//route to handle delete request of client
app.delete('/product/:productId',(req,res)=>{
        // get id of product from url parameter
        let idOfUrl=Number(req.params.productId) 
        //finding the index 
        let index=product.findIndex(productObj=>productObj.productId==idOfUrl)
        // product id not found
        if(index==-1){
            return res.json({message:"product not found"})
        }
        // delete product by index
        product.splice(index,1)
        //send res
        res.json({message:"product removed"})
})