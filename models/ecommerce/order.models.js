import mongoose from 'mongoose';
const orderItem = mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema = mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type: [orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    // how to give them only some choices to choose from
    status:{
        type:String,
        enum:["Pending","Cancelled","Delivered"],
        default:"Pending"
    }

},{timestamps:true})

export const Order  = mongoose.model("Order", orderSchema)