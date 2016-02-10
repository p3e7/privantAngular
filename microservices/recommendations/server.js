var express = require('express');
var bodyParser = require('body-parser');
var reqfy = require("requestify");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// checks the authentications for each request
app.use(function(req, res, next){
    var oRes = res;
    var token = req.headers.token;
    
    request("http://localhost:10000/user/"+token+"/authenticated", (sres) => {
        console.log(sres);
        var user = sres.getBody();
        if(user === ""){
            console.log("[INFO] NOT AUTHENTICATED");
            oRes.sendStatus(401);
        }
        else {
            req.user = user;
            next();
        }
    });
});

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
    var user = req.user;
    calcRecommendations(user.user.id, (recoms) => res.send(recoms));
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

// maps event structure to recommendation structure (model and view-model differ)
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

// extracts all subscribers to a given list of events (excludes a given and removes double values)
var extractUsers = function(events, uidExclude){
    var nObj = [];
    events.forEach((el, i, arr) => {
        
        el.subscriber.forEach((e2, i2, a2) => {
            console.log(e2);
            if(nObj.indexOf(e2) == -1 && e2 != uidExclude){
                nObj.push(e2);
            }
        });
    });
    
    return nObj;
}

// returns all events a given user (uid) is subscribed to
var usersEvents = function(uid, events){
    return events.filter((el, i, ar) => {
        var ret = el.subscriber.filter((el2, i2, ar2) => {
            if(el2 === uid){
                return true;
            }
            return false;
        });
        
        if(ret.length > 0){
            return true;
        }
        return false;
    });
}

// returns all events a given user is subscribed to but another one (uidExtract) isn't
var usersEvents = function(uid, events, uidExtract){
    return events.filter((el, i, ar) => {
        var ret = el.subscriber.filter((el2, i2, ar2) => {
            if(el2 === uid && el2 !== uidExtract){
                return true;
            }
            return false;
        });
        
        if(ret.length > 0){
            return true;
        }
        return false;
    });
}

// test
var calcRecommendations = function(userId, callback){
    request("http://localhost:9020/events", (evtres) => {
        // 1. Get the events the user is subscribed to
        // 2. Extract all other users from those events
        // 3. Create a list with all events the other users are subscribed to
        // 4. Count the occurrences of subscriptions by those users. This will be the metric for the recommendations.
        
        var events = evtres.getBody();
        
        console.log("==================== USER EVTS ================");
        var uevts = usersEvents(userId, events);
        console.log(uevts);
        console.log("==================== EVT USRS ================");
        var evtUsrs = extractUsers(uevts, userId);
        console.log(evtUsrs);
        console.log("==================== EXTR EVTS ================");
        var evtList = [];
        evtUsrs.forEach((el, i, ar) => {
            usersEvents(el, events, userId).forEach((el2, i2, ar2) => {
                if(evtList[el2.id] === undefined){
                    evtList[el2.id] = {count : 1, id : el2.id};
                }
                else {
                    evtList[el2.id].count = evtList[el2.id].count +  1;
                }
            });
        });
        // sorts the events descending by occurences 
        evtList.sort((a,b) => {
            return b.count - a.count;
        });
        console.log(evtList);
        
        var recoms = [];
        evtList.forEach((el, i,ar) => {
            recoms.push(mapEvent2Recom(events.find((el2, i2, ar2) => {
                if(el2.id === el.id){
                    return true;
                }
                
                return false;
            })));
        });
        
        console.log("============== RECOMS =====================");
        console.log(recoms);
        callback(recoms);
    });
}

// test call mit user 0001
calcRecommendations("0001", function(rec){
    console.log("DONE");
});