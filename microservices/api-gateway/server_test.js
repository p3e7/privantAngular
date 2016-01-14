var app = require('express')();

app.get('test', function(req, res){
	console.log('aa');
    res.redirect('http://localhost:3000/animals');
    console.log("lol");
});

// urls beschneiden !!!!
// arrays mergen

var server = app.listen(9000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('[INFO] listening at http://%s:%s', host, port);
});

