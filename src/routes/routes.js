const express = require("express");
const routes = express.Router();
const functions = require("../controllers/functions");

routes.get("/RandomNode", functions.RandomNode);

module.exports = routes;