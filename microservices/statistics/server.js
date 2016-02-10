var express = require('express');
var mongoclient = require('mongodb').MongoClient;
var assert = require('assert');
var app = express();
var url = 'mongodb://jessi:123456@ds047075.mongolab.com:47075/privant';

//Get statistics
app.get('/statistics', function(req, res) {
  mongoclient.connect(url, function(err, db) {
    assert.equal(null, err);
    findStatistics(db, function(data) {
      res.send(data);
    })
  })
});

//Update statistics
app.put('/statistics', function(req, res) {
  mongoclient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Req body: " + req.body);
    insertStatistics(db, req.body, function(data){
      res.send(data);
    })
  })
});

//Return all documents from statistic collection
var findStatistics = function(db, callback) {
  var collection = db.collection('statistic').find( ).toArray(function(err, docs) {
    assert.equal(err, null);
    console.dir(docs);
    callback(docs);

    db.close();
  });
};

//Update/insert a document (according to passed parameters monthyear + regUsers or activeUsers)
var insertStatistics = function(db, data, callback) {
  var monthyear = data[0];
  var statistic = data[1];
  var collection = db.collection('statistic');
  collection.updateOne({"monthyear": monthyear}, {$set: statistic}, {upsert:true}, function(err, res) {
    assert.equal(err, null);
    assert.equal(res.upsertedCount, 1);

    callback(res);

    db.close();
  })

};

//Init server
var server = app.listen(9003, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('[INFO] listening at http://%s:%s', host, port);
});
