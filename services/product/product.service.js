require('./config/db.connection');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require("path");
const protoPath = path.join(__dirname, '..', '..', 'proto', 'product.proto');
const productProto = protoLoader.loadSync(protoPath);
const { productPackage } = grpc.loadPackageDefinition(productProto);
const productServiceURL = 'localhost:4001';
const {
    productList,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('./functions/product.grpc');

function main() {
    const server = new grpc.Server();
    server.addService(productPackage.ProductService.service, {
        productList,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct
    })

    server.bindAsync(
        productServiceURL,
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if(err) return console.log(err);
            console.log(`gRPC product server is running on port : ${port}`);
            server.start();
        }
    )
}
main();
