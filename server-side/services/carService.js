const Cars = require("../models/cars");
//const Comments = require("../models/comments");

async function getAll() {
    return await Cars.find({});
}

async function create(boardgame) {
    return await Cars.create(boardgame);
}

async function update(id, boardgame) {
    const existing = await Cars.findById(id);

    if(!existing){
        throw new Error("Boardgame doesn't exist");
    }

    existing.name = boardgame.name;
    existing.description = boardgame.description;
    existing.minage = boardgame.minage;
    existing.gameduration = boardgame.gameduration;
    existing.minplayers = boardgame.minplayers;
    existing.maxplayers = boardgame.maxplayers;
    if(boardgame.imageUrl) {
        existing.imageUrl = boardgame.imageUrl;
    }

    return await existing.save();
}

async function getById(id) {
    const boardgame = await Cars.findById(id).lean();
    boardgame.comments = await Comments.find({ boardgameId: id}).lean();
    return boardgame;
}

async function deleteById(id) {
    await Cars.findOneAndDelete({ _id: id });
   // return await Comments.deleteMany({ boardgameId: id});
}

async function getGamesByUserId(id) {
    return await Cars.find({ owner: id }).lean();
}
module.exports = {
    create,
    update,
    getAll,
    getById,
    deleteById,
    getGamesByUserId: getGamesByUserId
}