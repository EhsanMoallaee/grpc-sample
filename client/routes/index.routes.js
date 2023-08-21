const { Router } = require('express');
const { productRouter } = require('./product.routes');
const { blogRouter } = require('./blog.routes');
const router = Router();

router.use('/product', productRouter);
router.use('/blog', blogRouter);

module.exports = {
    router
}