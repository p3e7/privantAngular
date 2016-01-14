var app = require('express')();
var http = require('http');

// providing the mappings
var mappings = [];
mappings = mappings.concat(require('./hon.json'));
mappings = mappings.concat(require('./jessi.json'));
mappings = mappings.concat(require('./pete.json'));
mappings = mappings.concat(require('./sascha.json'));

console.log(mappings);

// offers the function for registering a route and redirecting it to the provided server
var appMethod = function(host, port, path, redirect){
    app.get(path, function(req, res){
        console.log("[INFO] Redirecting from %s to %s",path ,"http://"+host+":"+port+""+redirect);
        res.redirect("http://"+host+":"+port+""+redirect);
    });
}

// stores the registered routes
var storedFunction = [];

// registers a route for each request
for(var i = 0; i < mappings.length; i++){
	for(var j = 0; j < mappings[i].redirects.length; j++){
        storedFunction.push(appMethod(mappings[i].host, mappings[i].port, mappings[i].redirects[j].path, mappings[i].redirects[j].redirect));
	}
}

// urls beschneiden !!!!
// arrays mergen

// starts the server
var server = app.listen(9000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('[INFO] listening at http://%s:%s', host, port);
});


// MAYBE TO HANDLE REQUESTs
var httpReq = function(host, path, port, resFunc){
	http.get({"host": host, "path": path, "port": port}, function(res){
		var body = [];
		res.on('data', function(chunk) {
			body.push(chunk);
		}).on('end', function(){
			resFunc(Buffer.concat(body));	
		});
	});
};