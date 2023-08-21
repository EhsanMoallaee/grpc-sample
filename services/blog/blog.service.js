require('./config/db.connection');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require("path");
const protoPath = path.join(__dirname, '..', '..', 'proto', 'blog.proto');
const blogProto = protoLoader.loadSync(protoPath);
const { blogPackage } = grpc.loadPackageDefinition(blogProto);
const blogServiceURL = 'localhost:4002';
const {
    blogList,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
} = require('./functions/blog.grpc');

function main() {
    const server = new grpc.Server();
    server.addService(blogPackage.BlogService.service, {
        blogList,
        createBlog,
        getBlog,
        updateBlog,
        deleteBlog
    })

    server.bindAsync(
        blogServiceURL,
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if(err) return console.log(err);
            console.log(`gRPC blog server is running on port : ${port}`);
            server.start();
        }
    )
}
main();
