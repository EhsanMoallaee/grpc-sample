const { Router } = require('express');
const { productList, createProduct, updateProduct, getProduct, deleteProduct } = require('../controllers/product.controller');
const productRouter = Router();

productRouter.get('/list', productList);
productRouter.get('/getProduct/:id', getProduct);
productRouter.get('/create', createProduct);
productRouter.get('/update', updateProduct);
productRouter.get('/delete/:id', deleteProduct);

module.exports = {
    productRouter
}