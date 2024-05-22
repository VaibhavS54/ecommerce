const mongoose = require('mongoose')


// Route Handler 
const Cart = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Product" //reference to the product model
    },
    image:{
        type:String,
    },
    name: {
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },  
    date:{
        type:Date,
        default: Date.now,
    }, 
})


// Export 
module.exports = mongoose.model("Cart",Cart);