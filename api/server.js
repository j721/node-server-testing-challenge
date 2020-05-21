const express = require("express");

const server = express();

const Foods = require("../food/food-model.js");

const Router = require('../food/food-router');

server.use(express.json());
server.use('api/foods', Router);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Good to go!" });
});


module.exports = server;