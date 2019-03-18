const express = require('express');
const app = express();
const positionRoutes = express.Router();

// Require Position model in our routes module
let Position = require('../models/Position');

// Defined get data(index or listing) route
positionRoutes.route('/:code').get(function (req, res) {
    let code = req.params.code;
    Position.find({"statecode":code}, function (err, positions){
    if(err){
      console.log(err);
    }
    else {
      res.json(positions);
    }
  });
});

module.exports = positionRoutes;