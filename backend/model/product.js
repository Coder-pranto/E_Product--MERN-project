const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    imgURL:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})


module.exports = mongoose.model('Product',productSchema);


//'Product' = 'products' will be the collection name