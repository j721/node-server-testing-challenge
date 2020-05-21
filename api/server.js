const express = require("express");

const server = express();

const Foods = require("../food/food-model.js");

const Router = require('../food/food-router');

server.use(express.json());
server.use('api/foods', Router);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Good to go!" });
});

// server.get("/food", (req, res) => {
//   Foods.getAll()
//     .then(food => {
//       res.status(200).json(food);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

module.exports = server;