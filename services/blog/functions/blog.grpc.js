const { BlogModel } = require("../models/blog.model");

async function blogList(call, callback) {
    try {
        const blogs = await BlogModel.find();
        callback(null, {blogs});
    } catch (error) {
        callback(error, null);
    }
}

async function createBlog(call, callback) {
    try {
        const { title, text } = call.request;
        await BlogModel.create({title, text});
        callback(null, {status: 'created'});
    } catch (error) {
        callback(error, null);
    }
}

async function getBlog(call, callback) {
    try {
        const { id } = call.request;
        const blog = await BlogModel.findOne({id});
        if(!blog) throw Error('Blog not found')
        callback(null, blog)
    } catch (error) {
        callback(error, null);
    }
}

async function updateBlog(call, callback) {
    try {
        const data = call.request;
        const id = data.id;
        delete data.id;
        const result = await BlogModel.findOneAndUpdate({id}, {$set: data});
        if(result) callback(null, {status: 'Blog updated successfully'});
        callback({message: 'Failed to update Blog'})        
    } catch (error) {
        callback(error, null);
    }
}

async function deleteBlog(call, callback) {
    try {
        const { id } = call.request;
        const result = await BlogModel.deleteOne({id});
        if(result.deletedCount > 0) callback(null, {status: 'Blog deleted successfully'});
        callback({message: 'Failed to delete blog'})        
    } catch (error) {
        callback(error, null);
    }
}

module.exports = {
    blogList,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
}