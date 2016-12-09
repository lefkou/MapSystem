/**
 * Created by lef on 07/12/2016.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://lefg7:damnbitch@ds127998.mlab.com:27998/mapsystem';
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Connecting \n');
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
            //Error so close connection
            db.close();
        } else {
            //HURRAY!! We are connected. :)
            response.write('Connection established to mongodb db.\n');

            // Get the documents collection
            var collection = db.collection('points');

            var point1 = {name: 'Walk 1',length: '2000',start_lat: '57.008702', start_long:'-2.228919',postcode: 'AB39 3QH'};
            var point2 = {name: 'Walk 2',length: '4000',start_lat: '57.054182', start_long:'-2.1473604',postcode: 'AB12 4WA'};
            var point3 = {name: 'Walk 3',length: '3000',start_lat: '57.003702', start_long:'-2.228419',postcode: 'AB39 3QH'};
            var point4 = {name: 'Walk 4',length: '1000',start_lat: '57.002702', start_long:'-2.228219',postcode: 'AB39 3QH'};
            var point5 = {name: 'Walk 5',length: '4032',start_lat: '57.001702', start_long:'-2.228319',postcode: 'AB39 3QH'};

            collection.insert([point1, point2, point3], function (err, result) {
                if (err) {
                    response.write('Insert failed ' + err + "\n");
                } else {
                    console.log(result);
                    response.write('Inserted ' + result.insertedCount +' documents ok. +"\n"');
                }
                //Close connection
                db.close();
                response.end('Finished, Connection closed \n');
                //remove any other db.close or response.end statement below this line
            });
        }


        response.end('Finished, Connection closed \n');
    });

}).listen(port);
