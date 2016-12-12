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
  point.info = req.body.info;
  point.img_url = req.body.img_url;
  point.lat = req.body.lat;
  point.long = req.body.long;
  point.postcode = req.body.postcode;
  // save the point and check for errors
  point.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Point created!' });
  });
});

module.exports = router;
