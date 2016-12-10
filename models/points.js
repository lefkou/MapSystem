var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pointSchema = new Schema({
    name:           String,
    length:         String,
    start_lat:      String,
    start_long:     String,
    postcode:       String,
});

var points = mongoose.model("points", pointSchema);

exports.getPoints = function(cb){
    points.find({}, function(err, res) {
        if(err){
            cb(err);
            return;
        } else{
            cb(null,res);
        }
    });
}



module.exports.points = points;
