const { Router } = require('express');
const { productList, createProduct, updateProduct, getProduct, deleteProduct } = require('../controllers/product.controller');
const productRouter = Router();

productRouter.get('/list', productList);
productRouter.get('/:id', getProduct);
productRouter.post('/create', createProduct);
productRouter.patch('/update/:id', updateProduct);
productRouter.delete('/delete/:id', deleteProduct);

module.exports = {
    productRouter
}