const Product = require('../model/product');

const getProducts = async(req , res, next)=>{
    let products = await Product.find()
    if(!products)
    res.status(404).json({message:"No Products"});
    else
    res.status(200).json({products});
}


const getProductById =  async(req, res,next) => {
    let productID = req.params.id;
    let product = await Product.findById(productID)
    if(!product)
    res.status(404).json({message:"No Product Found"});
    else
    res.status(200).json({product});

}

const createProduct = async(req , res, next)=>{
    let newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgURL: req.body.imgURL,
        quantity: req.body.quantity
    })
     let dataPromise = await newProduct.save()
     if(!dataPromise) {
        res.status(500).json({message:"can't add product! There are internal server error"});
        next(); // if i get an error for this next() we can use next middleware
    }
      res.status(201).json({dataPromise});
}


const editProduct = async(req, res) => {
    const productID = req.params.id;
    let updateProduct = await Product.findByIdAndUpdate(productID,{
         name: req.body.name,
         description: req.body.description,
         price: req.body.price,
         imgURL: req.body.imgURL,
         quantity: req.body.quantity
    })
 
    let dataPromise = await updateProduct.save()
    
    if(!dataPromise) {
     res.status(500).json({message:"can't update product! There are internal server error"});
     next(); // if i get an error for this next() we can use next middleware
   }
     res.status(200).json({dataPromise});
 
 }


 const removeProduct =  async(req, res) => {
    const productID = req.params.id;
    let deleteProduct = await Product.findByIdAndDelete(productID);
    if(!deleteProduct)
    res.status(500).json({message:"can't Delete product! There are internal server error"});

    res.status(200).json({message:"Product is deleted", deleteProduct});
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    removeProduct
    
}