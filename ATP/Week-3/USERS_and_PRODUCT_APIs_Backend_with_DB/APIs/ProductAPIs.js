import exp  from 'express'
export const productApp=exp.Router()
import { ProductModel } from '../models/ProductModel.js';


//define product rest api routes
//create new product
productApp.post("/product",async(req,res)=>{
    //get new product obj from req
    const newProduct=req.body;
    //create new product document 
    const newProductDocument=new ProductModel(newProduct);
    //save
    await newProductDocument.save()
    //send res
    res.status(201).json({message:"Product created"});
});


//read all products
productApp.get("/product",async(req,res)=>{
    //read all products from db
    let productlist=await ProductModel.find();
    //send res
    res.status(200).json({message:"Products",payload:productlist})
})


//read a product by productId
productApp.get("/product/:id",async(req,res)=>{
    //read object it from res params
    const pid=req.params.id
    //find product by productId
    const productobj=await ProductModel.findOne({productId:pid})
    //if product not found
    if(productobj==null){
        res.status(404).json({message:"product not found",})
        return;    
    }
    //send res
    res.status(200).json({message:"product",payload:productobj})
})


//update product by id
productApp.put("/product/:id",async(req,res)=>{
    //get modified product from req
    const modifiedProduct=req.body;
    const pid=req.params.id;
    //find product by id and update
    const updatedProduct=await ProductModel.findOneAndUpdate({productId:pid},{$set:{...modifiedProduct}},{returnDocument: "after",runValidators:true})
    //if product not found
    if(updatedProduct==null){
        res.status(404).json({message:"product not found",})
        return;    
    }
    //send res
    res.status(200).json({message:"product modified",payload:updatedProduct})
})


//delete a product by productId
productApp.delete("/product/:id",async(req,res)=>{
    //read object from res params
    const pid=req.params.id
    //find product by productId
    let deletedproduct=await ProductModel.findOneAndDelete({productId:pid})
    //if product not found
    if(deletedproduct==null){
        res.status(404).json({message:"product not found",})
        return;    
    }
    //send res
    res.status(200).json({message:"product deleted",payload:deletedproduct})
})