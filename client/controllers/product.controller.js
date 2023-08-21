const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require("path");
const productProtoPath = path.join(__dirname, '..', '..', 'proto', 'product.proto');
const productProto = protoLoader.loadSync(productProtoPath);
const { productPackage } = grpc.loadPackageDefinition(productProto);
const productServiceURL = 'localhost:4001';
const productClient = new productPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());

function productList(req, res, next) {
    console.log('productList');
    productClient.productList(null, (err, response) => {
        if(err) return res.json(err);
        return res.json(response);
    })
}

function createProduct(req, res, next) {
    const { title, price } = req.query;
    productClient.createProduct({ title, price}, (err, response) => {
        if(err) return res.json(err);
        return res.json(response);
    })
}

function getProduct(req, res, next) {
    const { id } = req.params;
    productClient.getProduct({id},  (err, response) => {
        if(err) return res.json(err);
        return res.json(response);
    })
}

function updateProduct(req, res, next) {

}

function deleteProduct(req, res, next) {

}

module.exports = {
    productList,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}