const router = require('express').Router();
const {
  getProducts,
  getProductById,
  createProduct,
  editProduct,
  removeProduct,
} = require('../controllers/product_controller.js');

//Read data
router.get('/', getProducts);

//Get data
router.get('/:id', getProductById);

//Create data
router.post('/', createProduct);

//Update data
router.patch('/:id', editProduct);

//Delete data

router.delete('/:id', removeProduct);

module.exports = router;

/* 
Working with save()

save() is a method on a Mongoose document. The save() method is asynchronous, so it returns a promise that you can await on.

When you create an instance of a Mongoose model using new, calling save() makes Mongoose insert a new document. */
