var express = require('express'),
    harp    = require('harp'),
    path    = require('path'),
    fs      = require('fs'),
    events   = require('./events'),
    router  = require('./router'),
    app     = express();

// Static Server
app.use(express.static(__dirname + '/public'));

// Static Routes without Extension
app.use(router);

// Regenerate Site
app.get('/events.json', function (req, res) {
  events(function (err, data) {
    res.send(data);
  });
});

app.listen(8080);
