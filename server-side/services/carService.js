const Cars = require("../models/cars");
const Comments = require("../models/comments");
//const Comments = require("../models/comments");

async function getAll() {
    return await Cars.find({});
}

async function create(boardgame) {
    return await Cars.create(boardgame);
}

async function update(id, offer) {
    const existing = await Cars.findById(id);

    if(!existing){
        throw new Error("Boardgame doesn't exist");
    }

    existing.model = offer.model;
    existing.description = offer.description;
    existing.fuel = offer.fuel;
    existing.price = offer.price;
    existing.mileage = offer.mileage;
    existing.color = offer.color;
    existing.seats = offer.seats;
    existing.telephone = offer.telephone;
   
    existing.carImage = offer.carImage;
    

    return await existing.save();
}

async function getById(id) {
    const offer = await Cars.findById(id).lean();
    offer.comments = await Comments.find({ offerId: id}).lean();
    return offer;
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