const { Types, Schema, model } = require("mongoose");

const blogScheme = new Schema({
    userId: { type: Types.ObjectId, ref: 'Users', required: true },
    username: { type: String, required: true },
    context: { type: String, required: true },
    shortcont: { type: String, required: true },
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    
}, { timestamps: true });

const Blog = model('Blog', blogScheme);
module.exports = Blog;