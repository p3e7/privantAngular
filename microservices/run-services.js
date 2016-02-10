var spawn = require('child_process').spawn;

var auth = spawn('node /auth/server.js');
var mock = spawn('node /mock/server.js');


auth.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

auth.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

auth.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});


