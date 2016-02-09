var express = require('express');
var bodyParser = require('body-parser');
var reqfy = require("requestify");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/events', function (req, res) {
    // by now only a list of the events
    var oRes = res;
    request("http://localhost:9020/events", (sres) => {
        var events = sres.getBody();
        var recoms = [];
        for(var i = 0; i < events.length; i++){
            recoms.push(mapEvent2Recom(events[i]));
        }
        oRes.send(recoms);
    });
});

app.get('/recommendations', function (req, res) {
    // by now only a list of the events
    var oRes = res;
    var token = req.headers.token;
    console.log("[INFO] TOKEN : "+token);
    request("http://localhost:9020/user/"+token+"/authenticated", (sres) => {
        console.log(sres);
        var user = sres.getBody();
        if(user === ""){
            console.log("[INFO] NOT AUTHENTICATED");
            oRes.sendStatus(401);
        }
        else {
            console.log("[INFO] AUTHENTICATED");
            
            request("http://localhost:9020/events", (evtres) => {
                var events = evtres.getBody();
                var recoms = [];
                for(var i = 0; i < events.length; i++){
                    recoms.push(mapEvent2Recom(events[i]));
                }
                oRes.send(recoms); // TODO build recommendatino tree
            });
        }
    });
    
});


// start server
var server = app.listen(9004, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('[INFO] listening at http://%s:%s', host, port);
});

var request = function(url, callback){
    reqfy.get(url).then(callback);
}

var mapEvent2Recom = function(inevent){
    return {
        rank : "5",
        event : {
            id: inevent.id,
            title : inevent.name,
            description : inevent.description,
            city : inevent.location,
            date : inevent.date,
            createdBy : "",
            private : inevent.private,
            tags : [inevent.category],
            maxUser : inevent.limit
        }
    };
}

var recommendEvents = function(){
}

// returns all events a given user (uid) ist subscribed to
var usersEvents = function(uid, events){
    return events.find((el, i, ar) => {
        var ret = el.subscriber.find((el2, i2, ar2) => {
            if(el2 === uid){
                return true;
            }
            return false;
        });
        
        if(ret !== undefined){
            return true;
        }
        return false;
    });
}