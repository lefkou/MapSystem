var express = require('express');
var router = express.Router();
var points = require('../models/points.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  points.getPoints(function(err,p){
    if(err){
        res.send(err);
    } else {
    		res.status(err.status || 500);
  			res.setHeader("Access-Control-Allow-Origin: *");
  			res.setHeader("Access-Control-Allow-Methods: PUT, GET, POST");
  			res.setHeader("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        res.json(p);
    }
  });
});

module.exports = router;
