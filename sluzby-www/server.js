var express = require('express');
var http = require('http');
var app = express();
var config = require('config.json')('./dev_config.json');
app.use(express.static(__dirname + config.staticFolder));

app.get('/', function(req, res) {
    res.sendFile(config.indexPath, {root: __dirname });
});

app.listen(config.port);
console.log("Listening on port " + config.port + " using '" + config.configName + "' configuration");