const express = require("express");
const authContoller = require("../controllers/authContorller");
const cors = require('cors');
const carController = require("../controllers/carContoller");
const commentsContorller = require("../controllers/commentController");
const blogController = require("../controllers/blogController");

module.exports = function (app) {
    app.use(cors());
    app.use(express.json());
    app.use('/auth/', authContoller);
    app.use('/cars/',carController)
    app.use('/cars/comment/',commentsContorller)
    app.use('/blog/',blogController)

}