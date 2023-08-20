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

function getProduct(req, res, next) {

}

function createProduct(req, res, next) {

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