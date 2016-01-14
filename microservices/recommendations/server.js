var express = require('express');
var app = express();


app.get('/recommendations', function (req, res) {
  
});

// start server
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('[INFO] listening at http://%s:%s', host, port);
});