var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pointSchema = new Schema({
    name:           String,
    info:           String,
    img_url:        String, 
    lat:      			String,
    long:    				String,
    postcode:       String
});


module.exports = mongoose.model('Point', pointSchema);
