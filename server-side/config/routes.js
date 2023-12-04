const express = require("express");
const authContoller = require("../controllers/authContorller");
const cors = require('cors');
const carController = require("../controllers/carContoller");

module.exports = function (app) {
    app.use(cors());
    app.use(express.json());
    app.use('/auth/', authContoller);
    app.use('/cars/',carController)
}