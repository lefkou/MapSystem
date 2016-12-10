var express = require('express');
var router = express.Router();
var points = require('../models/points.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  points.getPoints(function(err,p){
    if(err){
        res.send(err);
    } else {
        res.send(p);
    }
  });
});

module.exports = router;
