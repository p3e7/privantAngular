var express = require('express');
var reqfy = require("requestify");
var app = express();


app.get('/recommendations', function (req, res) {
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