const { ProductModel } = require("../models/product.model")

async function productList(call, callback) {
    try {
        const products = await ProductModel.find();
        callback(null, {products});
    } catch (error) {
        callback(error, null);
    }
}

async function createProduct(call, callback) {
    try {
        const { title, price } = call.request;
        await ProductModel.create({title, price});
        callback(null, {status: 'created'});
    } catch (error) {
        callback(error, null);
    }
}

async function getProduct(call, callback) {
    try {
        const { id } = call.request;
        const product = await ProductModel.findOne({id});
        if(!product) throw Error('Product not found')
        callback(null, product)
    } catch (error) {
        callback(error, null);
    }
}

function updateProduct(call, callback) {

}

function deleteProduct(call, callback) {

}

module.exports = {
    productList,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}