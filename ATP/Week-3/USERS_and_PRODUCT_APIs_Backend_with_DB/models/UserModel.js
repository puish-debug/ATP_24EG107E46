import { Schema,model } from "mongoose";

//create Cart schema {product,count}
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product" //name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})

//create User schema(username,password,email,age)
const UserSchema= new Schema({
    //structure of User resource
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"min lenght of username is 4 char"],
        maxLength:[6,"size exceed 5 chars"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"Email already existed"]
    },
    age:{
        type:Number,
    },
    cart:[cartSchema] //{product:"",count:2}
},{
    versionKey:false,
    timestamps:true,
});


//generate usermodel
export const UserModel = model("user",UserSchema);