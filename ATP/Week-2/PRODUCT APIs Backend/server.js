// Create HTTP server
import exp from 'express'
const app=exp()

//use body parser middleware
app.use(exp.json())

// set a port number
const port=3000

// to assign port number to HTTP server
app.listen(port, ()=> console.log(`server listening port ${port} ...`))

//test data will replace it after with database
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