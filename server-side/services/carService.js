const Car = require("../models/cars");
//const Comments = require("../models/comments");

async function getAll() {
    return await Car.find({}).lean();
}

async function create(boardgame) {
    return await Car.create(boardgame);
}

async function update(id, boardgame) {
    const existing = await Car.findById(id);

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
    const boardgame = await Car.findById(id).lean();
    boardgame.comments = await Comments.find({ boardgameId: id}).lean();
    return boardgame;
}

async function deleteById(id) {
    await Car.findOneAndDelete({ _id: id });
   // return await Comments.deleteMany({ boardgameId: id});
}

async function getGamesByUserId(id) {
    return await Car.find({ owner: id }).lean();
}
module.exports = {
    create,
    update,
    getAll,
    getById,
    deleteById,
    getGamesByUserId: getGamesByUserId
}