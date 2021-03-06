const port = process.env.PORT || '8080';
const host = process.env.HOST || '0.0.0.0';
const mongoose = require('mongoose');
const express = require('express');
const app = express();

var login = {
	"user": "testuser",
	"pass": "blabla"
};

var mongoLocalURL = "mongodb://" + host + "/unacademic_api";
var mongoLabURL = "mongodb://" + login.user + ":" + login.pass + "@ds029051.mongolab.com:29051/unacademic_api";

mongoose.connect(mongoLabURL);
//mongoose.connect(mongoLocalURL);

var con = mongoose.connection;

con.once('open', function() {
	console.log('connected to mongodb successfully');
});

con.once('error', function() {
	console.log('MongoLab connection error');
	console.error.bind(console, 'connection error:');
});


app.use(require('./api'));

app.listen(port, host);

console.log('Server running on %s:%d...', host, port);


module.exports = app;
