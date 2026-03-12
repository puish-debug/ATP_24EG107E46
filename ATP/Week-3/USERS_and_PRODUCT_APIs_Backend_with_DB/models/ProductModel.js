import { Schema,model } from "mongoose";

//create Product schema(productId(required),productName(required),price(required min 10000 and max 50000),brand(required))
const ProductSchema= new Schema({
    //structure of Product resource
    productId:{
        type:Number,
        required:[true,"ProductId is required"],
        unique:[true,"Product already existed"]
    },
    productName:{
        type:String,
        required:[true,"ProductName is required"],
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10000,"Minimum pricr of product is 10000"],
        max:[50000,"Minimum pricr of product is 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required"]
    },
},{
    versionKey:false,
    timestamps:true,
});


//create productmodel
export const ProductModel = model("product",ProductSchema);