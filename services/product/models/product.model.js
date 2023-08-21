const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    title: { type: String, unique: true },
    price: { type: Number, unique: true },
})

productSchema.pre('save', async function(next) {
    const data = await this.constructor.count();
    this.set({ id: (data + 1) });
    next();
})

module.exports = {
    ProductModel: mongoose.model('product', productSchema)
}