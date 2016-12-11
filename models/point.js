var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pointSchema = new Schema({
    name:           String,
    length:         String,
    start_lat:      String,
    start_long:     String,
    postcode:       String,
});


module.exports = mongoose.model('Point', pointSchema);
