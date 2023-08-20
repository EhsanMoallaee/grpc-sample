const { ProductModel } = require("../models/product.model")

async function productList(call, callback) {
    try {
        const products = await ProductModel.find();
        callback(null, {products});
    } catch (error) {
        callback(error, null);
    }
}

function getProduct(call, callback) {

}

function createProduct(call, callback) {

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