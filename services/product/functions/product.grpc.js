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

async function updateProduct(call, callback) {
    try {
        const data = call.request;
        const id = data.id;
        delete data.id;
        const result = await ProductModel.findOneAndUpdate({id}, {$set: data});
        if(result) callback(null, {status: 'Product updated successfully'});
        callback({message: 'Failed to update product'})        
    } catch (error) {
        callback(error, null);
    }
}

async function deleteProduct(call, callback) {
    try {
        const { id } = call.request;
        const result = await ProductModel.deleteOne({id});
        if(result.deletedCount > 0) callback(null, {status: 'Product deleted successfully'});
        callback({message: 'Failed to delete product'})        
    } catch (error) {
        callback(error, null);
    }
}

module.exports = {
    productList,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}