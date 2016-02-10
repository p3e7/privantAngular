var express = require('express');
var mongo = require('mongodb').MongoClient, assert = require('assert');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/user/:token/authenticated', function(req, res){
    var token = req.params.token;
    console.log('auth started for token:' + req.params.token);
    var entry = userTokens.find((element, index, array) => {
        if(element.token === token){
            return true;
        }
        return false;
    });
    
    if(entry !== undefined){
        entry.user.passwort = ""; // remove pw;
        res.send(entry);
    }
    else {
        res.send("");
    }
});

// perUserToken
var userTokens = [];

app.post('/user/login', function(req, res){
    var name = req.body.name || "";
    var pw = req.body.pw || "";
    runDBOperation(findDocuments, function(data){
        // check if entry found. If so generate token and send it back.
        
        var users = data[0].user;
        var authUser = users.find((element, index, array) => {
            if(element.username === name && element.passwort === pw){
                return true;
            }
            return false;
        });
        
        console.log(authUser);
        if(authUser !== undefined){
            var token = generateAuthToken(name, pw);
            
            var entry = userTokens.findIndex((element, index, array) => {
                if(element.user.username === authUser.username && element.user.passwort === authUser.passwort){
                    return true;
                }
                return false;
            });
            if(entry > -1){
                userTokens.splice(entry, 1);
            }
            
            userTokens.push({user: authUser, token : token});
            console.log(userTokens);
            res.send(token);
        }
        else {
            res.sendStatus(400);
        }
        
    }, {collection : "user"});
});

var server = app.listen(9022, function () {
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
    callback(docs);
    db.close();
  });      
}

var generateAuthToken = function(name, pw){
    var md5 = crypto.createHash('md5');
    return md5.update(Date.now() + "" + name + pw).digest('hex');
}