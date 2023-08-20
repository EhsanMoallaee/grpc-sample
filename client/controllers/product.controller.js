const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require("path");
const productProtoPath = path.join(__dirname, '..', '..', 'proto', 'product.proto');
const productProto = protoLoader.loadSync(productProtoPath);
const { productPackage } = grpc.loadPackageDefinition(productProto);
const productServiceURL = 'localhost:4001';
const productClient = new productPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());