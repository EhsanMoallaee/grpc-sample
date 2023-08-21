const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require("path");
const blogProtoPath = path.join(__dirname, '..', '..', 'proto', 'blog.proto');
const blogProto = protoLoader.loadSync(blogProtoPath);
const { blogPackage } = grpc.loadPackageDefinition(blogProto);
const blogServiceURL = 'localhost:4002';
const blogClient = new blogPackage.BlogService(blogServiceURL, grpc.credentials.createInsecure());

function blogList(req, res, next) {
    blogClient.blogList(null, (err, response) => {
        if(err) return res.json(err);
        return res.json(response);
    })
}

function createBlog(req, res, next) {
    const { title, text } = req.query;
    blogClient.createBlog({ title, text}, (err, response) => {
        if(err) return res.json(err);
        return res.json(response);
    })
}

function getBlog(req, res, next) {
    const { id } = req.params;
    blogClient.getBlog({id},  (err, response) => {
        if(err) return res.json(err);
        return res.json(response);
    })
}

function updateBlog(req, res, next) {
    const data = req.query;
    blogClient.updateBlog(data,  (err, response) => {
        if(err) return res.json(err);
        return res.json(response);
    })
}

function deleteBlog(req, res, next) {
    const { id } = req.params;
    blogClient.deleteBlog({id},  (err, response) => {
        if(err) return res.json(err);
        return res.json(response);
    })
}

module.exports = {
    blogList,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
}