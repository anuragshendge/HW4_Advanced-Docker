var express = require('express')
var fs      = require('fs')
var app = express()

var args = process.argv.slice(2);
var PORT = args[0];

app.get('/', function(req, res) 
{
	res.send("<h2> Hello GREEN:CHANGE IS IN THE ORDER  </h2>");
});

var server = app.listen(PORT, function () {

	var host = server.address().address
	var port = server.address().port
	console.log('Example app listening at http://%s:%s', host, port)
});
