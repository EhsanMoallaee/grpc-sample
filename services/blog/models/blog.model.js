const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    title: { type: String, unique: true },
    text: { type: String, unique: true },
})

blogSchema.pre('save', async function(next) {
    const data = await this.constructor.count();
    this.set({ id: (data + 1) });
    next();
})

module.exports = {
    BlogModel: mongoose.model('blog', blogSchema)
}