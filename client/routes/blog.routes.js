const { Router } = require('express');
const { blogList, createBlog, updateBlog, getBlog, deleteBlog } = require('../controllers/blog.controller');
const blogRouter = Router();

blogRouter.get('/list', blogList);
blogRouter.get('/getblog/:id', getBlog);
blogRouter.get('/create', createBlog);
blogRouter.get('/update', updateBlog);
blogRouter.get('/delete/:id', deleteBlog);

module.exports = {
    blogRouter
}