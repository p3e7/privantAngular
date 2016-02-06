var express = require('express');
var mongo = require('mongodb').MongoClient, assert = require('assert');
var app = express();

app.get('/events', function(req, res){
    runDBOperation(findDocuments, function(data){
        res.send(data[0].event);
    }, { collection: "event" });
});

var server = app.listen(9020, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('[INFO] listening at http://%s:%s', host, port);
});

// General function that will initiate a connection and start a given db operation
// @dbOp: function that will use the db handle
// @callback: function that will get the results from dbOp
// @args: function parameters for dbOp (may be undefined)
var runDBOperation = function(dbOp, callback, args){
    mongo.connect("mongodb://sascha:asdVFSJD308fdAS@ds047075.mongolab.com:47075/privant", function(err, db) {
        assert.equal(null, err);
        console.log("Connected to DB correctly");
        
        if(args === undefined){
            dbOp(db, callback);
        }
        else {
            dbOp(db, callback, args);
        }
    });
}

var findDocuments = function(db, callback, args) {
  // Get the documents collection
  var collection = db.collection(args.collection);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.dir(docs)
    callback(docs);
    db.close();
  });      
}