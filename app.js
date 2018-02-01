var express = require('express');
var app 	= express();

app.get('/', function(req, res) {
  res.send('routing.....');
});

app.get('/a', function(req, res) {
  res.send('route to a');
});

app.get('/b', function(req, res) {
  res.send('route to b');
});

app.get('/a/:id', function(req, res) {
  res.send('route to a id: '+req.params.id);
});

app.listen(8000);
