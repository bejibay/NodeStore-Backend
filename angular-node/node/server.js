var http = require('http');
var app = require('/app');
var port = 3000;

var server = http.createServer(req,res,function(){
res.end();
}
server.listen(port, function(){"server is listening on
port 3000";});
