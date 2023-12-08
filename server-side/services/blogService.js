const Blog = require("../models/blog");
const Comments = require("../models/comments");

async function getAll() {
    return await Blog.find({});
}

async function create(boardgame) {
    return await Blog.create(boardgame);
}


async function getById(id) {
    const offer = await Blog.findById(id).lean();
    offer.comments = await Comments.find({ offerId: id}).lean();
    return offer;
}


module.exports = {
    create,
    getAll,
    getById,
   
}