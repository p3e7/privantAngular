var express = require('express');
var app = express();


app.get('/recommendations', function (req, res) {
  res.send([{
        "rank": "2",
        "event": {
            "id": "1",
            "title": "Street Art 8 Dortmund",
            "description": "Ein Festival für Künstler, Genießer und ausgefallene Straßenkunst im urbanen Raum",
            "city": "Dortmund",
            "date": "12.12.2015",
            "createdBy": "Sascha",
            "private": false,
            "createdAt": "2015-08-01",
            "maxUser": "6",
            tags: ["art", "street", "kunst"]
        }
    }, {
        "rank": "2",
        "event": {
            "id": "1",
            "title": "Street Art 8 Bochum",
            "description": "Ein Festival für Künstler, Genießer und ausgefallene Straßenkunst im innerstädischen Raum",
            "city": "Bochum",
            "date": "12.11.2015",
            "createdBy": "Sascha",
            "private": false,
            "createdAt": "2015-08-01",
            "maxUser": "6",
            tags: ["art", "street", "kunst"]
        }
    }, {
        "rank": "2",
        "event": {
            "id": "1",
            "title": "Street Art 8 Essen",
            "description": "Ein Festival für Künstler, Genießer und ausgefallene Straßenkunst im Treiben der Stadt",
            "city": "Essen",
            "date": "05.12.2015",
            "createdBy": "Sascha",
            "private": false,
            "createdAt": "2015-08-01",
            "maxUser": "6",
            tags: ["art", "street", "kunst"]
        }
    }]);
});

// start server
var server = app.listen(9004, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('[INFO] listening at http://%s:%s', host, port);
});