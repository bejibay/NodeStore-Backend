var http = require('http');
var app = require('./app');
app.set('port' process.env.PORT||3000);

var server = http.createServer(app);
}
server.listen(process.env.PORT||3000);
