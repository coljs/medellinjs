var express = require('express'),
    harp    = require('harp'),
    path    = require('path'),
    fs      = require('fs'),
    exec    = require('child_process').exec,
    events  = require('./events'),
    router  = require('./router'),
    app     = express();

// Static Server
app.use(express.static(__dirname + '/public'));

// Static Routes without Extension
app.use(router);

// Fetch Events
app.get('/events.json', function (req, res) {
  events(function (err, data) {
    res.send(data);
  });
});

// Update site
app.get('/update', function (req, res) {
  exec('git pull', function (err, stdout, stderr) {
    if (err) return;

    console.log(stdout);
    throw new Error('Restart action required');
  });
});

app.listen(8080);
