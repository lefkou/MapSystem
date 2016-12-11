var express = require('express');
var router = express.Router();
var Point = require('../models/point.js');

/* GET points listing. */
router.get('/', function(req, res, next) {
  Point.find(function(err, points) {
        if (err)
          res.send(err);

        res.json(points);
  });
});

/* POST points. */
router.post('/', function(req, res, next) {
	var point = new Point(); // create a new instance of the Point model
  // set the point fields (comes from the request)
  point.name = req.body.name;
  point.length = req.body.length;
  point.start_lat = req.body.start_lat;
  point.start_long = req.body.start_long;
  point.postcode = req.body.postcode;
  // save the point and check for errors
  point.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Point created!' });
  });
});

module.exports = router;
