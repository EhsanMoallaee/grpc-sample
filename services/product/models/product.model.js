const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    title: { type: String, unique: true },
    id: { type: Number, unique: true },
})

productSchema.pre('save', function(next) {
    const self = this;
    self.constructor.count(async function(err, data) {
        if(err) return next(err);
        model.set({ id: (data + 1) });
        next();
    })
})

module.exports = {
    ProductModel: mongoose.model('product', productSchema)
}