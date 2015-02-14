'use strict';

var express = require('express'),
    webhook = require('github-webhook-middleware'),
    exec    = require('child_process').exec,
    config  = require('./config'),
    events  = require('./events'),
    router  = require('./router'),
    app     = express(),
    port    = process.env.PORT || 8080;

// Setup Github Webhooks
var validateWebhook = webhook({
  secret: config.github.secret
});

// Static Server
app.use(express.static(__dirname + '/public'));

// Static Routes without Extension
app.use(router);

// Fetch Events
app.get('/events.json', function (req, res) {
  events(function (err, data) {
    if (err)
      return res.status(500).send(err.message);

    res.send(data);
  });
});

// Update site
app.post('/update', validateWebhook, function (req, res) {
  if (req.headers['x-github-event'] !== 'push')
      return res.status(200).json({ status: 'nothing to do' });

  exec('git pull && grunt build', function (err, stdout, stderr) {
    if (err) return res.status(500).send(err.message);

    // Log git and grunt output
    console.log(stdout);
    console.error(stderr);

    res.status(200).json({ status: 'ok' });

    // Restart node process after update
    process.exit(0);
  });
});

app.listen(port, function () {
  console.log('MedellinJS listening on http://localhost:%s', port);
});
