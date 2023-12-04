const express = require("express");
const authContoller = require("../controllers/authContorller");
const cors = require('cors');

module.exports = function (app) {
    app.use(cors());
    app.use(express.json());
    app.use('/auth/', authContoller);
 
}