// u should not store buffers like images or pdf in database they are ussually
// stored in some app like cloudinary and it give back link which we can store in database 

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    description: {
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    productImage:{
        type:String
    },
    price:{
        type:String,
        default:0
    },
    stock:{
        default:0,
        type:Number

    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, {timestamps:true});


export const Product = mongoose.model("Product", productSchema)