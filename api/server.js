const express = require("express");

const server = express();

const Food = require("../food/food-model.js");

const Router = require('../food/food-router');

server.use(express.json());
server.use('api/foods', Router);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Good to go!" });
});

// server.get("/food", (req, res) => {
//   Food.getAll()
//     .then(hobbits => {
//       res.status(200).json(hobbits);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

module.exports = server;